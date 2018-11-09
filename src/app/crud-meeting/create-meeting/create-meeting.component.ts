import { Component, OnInit } from '@angular/core';

//for routing
import { ActivatedRoute, Router } from '@angular/router';
//import for services
import { AppService } from '../../app.service';
import { SocketService } from '../../socket.service';
import { Cookie } from 'ng2-cookies';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent implements OnInit {

  public authToken:any;
  public meetingWithName: string;
  public meetingWithId: string;
  public venue: string;
  public purpose: string;
  public title: string;
  public endDate: any;
  public startDate: any;
  public hostId: string;
  public hostName: string;
  public userInfo:any;
  public normalUsers:any;
  public selectedUser: any;


  constructor(
    private appService: AppService,
    private socketService: SocketService,
    private _route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private location: Location
  ) { }

  ngOnInit() {
    this.authToken = Cookie.get('authToken');    
    this.hostId = Cookie.get('receiverId');
    this.hostName = Cookie.get('receiverName');//getting the receiverId, name to use as the meeting partners.
    this.userInfo = this.appService.getUserInfoFromLocalstorage();//getting the details of the admin from local storage.
    if(!this.userInfo.isAdmin){
      this.router.navigate(['/general']);//checking is the user reached here is not admin then redirect to normal user dashboard.
    }
    this.getAllNormalUsers();
  }


  public getSelected = (user) => {
    this.selectedUser = user
  }


  public validateDate(startDate:any, endDate:any):boolean {//method to validate the the start and end date of meeting .

    let start = new Date(startDate);
    let end = new Date(endDate);

    if(end < start){
      return true;
    }
    else{
      return false;
    }

  }//end validateDate

  //scheduling new meeting
  public scheduleMeeting = () => {

    if(!this.selectedUser){
      this.toastr.warning("Please select guest user", "Warning!");
    }else if(!this.title){
      this.toastr.warning("Title is required", "Warning!");
    }else if(!this.startDate){
      this.toastr.warning("Start time is required", "Warning!");
    }else if(!this.endDate){
      this.toastr.warning("End time is required", "Warning!");
    }else if(!this.venue){
      this.toastr.warning("Meeting venue is required", "Warning!");
    }else{
        let data:any = { };

        data.hostId = this.hostId;
        data.hostName = this.hostName;
        data.startDate = this.startDate.getTime();
        data.endDate = this.endDate.getTime();//changing the date&time to number of miliseconds before sending to database.
        data.title = this.title;
        data.purpose = this.purpose;
        data.venue = this.venue;
        data.meetingWithId = this.selectedUser.userId;
        data.meetingWithName = `${this.selectedUser.firstName} ${this.selectedUser.lastName}`;
        data.meetingWithEmail = this.selectedUser.email;
    
      
        this.appService.createMeeting(data, this.authToken).subscribe((apiResponse:any)=>{
          if(apiResponse.status==200){
            this.toastr.success("Success!","Meeting Scheduled");
            let dataForNotify = {
              message: `Hi ${this.selectedUser.firstName} ${this.selectedUser.lastName}, ${this.hostName} has schedule the Meeting - ${data.title}. Please check your Calendar/Email`,
              userId:this.selectedUser.userId
            }
            this.socketService.notifyUpdates(dataForNotify);
            setTimeout(() => {
              this.router.navigate(['/admin']);
            }, 1000);        
          }else{
            this.toastr.error(apiResponse.message);
          }
        },
        (error) => {
          this.toastr.error("Some error occured");//error page in case of error.
        }
      );//end subscribe

    }//end of else



  }//end scheduleMeeting

  
  //goBack Method
  public goBack(): any {//method using the location service to get user back to page from where he reached this page.
    this.location.back();
  }//end goBackMethod




  public getAllNormalUsers: any = () =>{

    this.appService.getAllNormalUsers(this.authToken).subscribe(
      (apiResponse) => {
        
        if (apiResponse.status == 200) {
          this.normalUsers = apiResponse.data;
        }
        else{
          this.toastr.info("No normal user found");
        }
      }
    );


  }



}
