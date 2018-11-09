import { Component, OnInit ,OnDestroy } from '@angular/core';
//for routing
import { ActivatedRoute, Router } from '@angular/router';
//import for services
import { AppService } from '../../app.service';
import { SocketService } from '../../socket.service';
import { Cookie } from 'ng2-cookies';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.css'],
  providers: [SocketService]
})
export class EditMeetingComponent implements OnInit, OnDestroy  {


  public authToken:string;

  public purpose: string;
  public venue: string;
  public title: string;
  public endDate: Date;
  public startDate: Date;
  public hostId:string;
  public hostName:string;
  public userInfo:any;
  public meetingId:string;
  public meetingWithId:string;
  public meetingWithName:string;
  public meetingWithEmail:string;

  constructor(
    private appService: AppService,
    private socketService: SocketService,
    private _route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private location: Location
  ) { }

  ngOnInit() {
    
    this.hostId = Cookie.get('receiverId');
    this.hostName = Cookie.get('receiverName');
    this.authToken = Cookie.get('authToken');
    this.userInfo = this.appService.getUserInfoFromLocalstorage();
    this.meetingId = this._route.snapshot.params['meetingId'];
    this.getMeeting();
  }


  ngOnDestroy() {
    this.socketService.exitSocket()
  }


  public getMeeting(){

    this.appService.getMeeting(this.meetingId,this.authToken)
      .subscribe((apiResponse)=>{

        if(apiResponse.status == 200){
          this.startDate = new Date(apiResponse.data.startDate);
          this.endDate = new Date(apiResponse.data.endDate);
          this.title = apiResponse.data.title;
          this.venue = apiResponse.data.venue;
          this.purpose = apiResponse.data.purpose;
          this.meetingWithId = apiResponse.data.meetingWithId;
          this.meetingWithName = apiResponse.data.meetingWithName;
          this.meetingWithEmail = apiResponse.data.meetingWithEmail;
        }
        else {
          this.toastr.error(apiResponse.message);
        }
      },
      (error) => {
        this.toastr.error("Some error occured");
      });//end subscribe
  }//end getMeeting


  public validateDate(startDate:any, endDate:any):boolean {

    let start = new Date(startDate);
    let end = new Date(endDate);

    if(end < start){
      return true;
    }
    else{
      return false;
    }

  }//end validateDate



  public updateScheduleMeeting(){

    let data:any = { };

    data.hostId = this.hostId;
    data.hostName = this.hostName;
    data.startDate = this.startDate.getTime();
    data.endDate = this.endDate.getTime();
    data.title = this.title;
    data.purpose = this.purpose;
    data.venue = this.venue;
    data.meetingWithId = this.meetingWithId;
    data.meetingWithName = this.meetingWithName;
    data.meetingId = this.meetingId;
    data.meetingWithEmail = this.meetingWithEmail


    this.appService.editMeeting(data, this.authToken)
      .subscribe((apiResponse) => {
        if(apiResponse.status == 200){
          this.toastr.info("Success!","Meeting details updated");
          let dataForNotify = {
            message: `Hi ${this.meetingWithName}, ${this.hostName} has reschedule the Meeting - ${data.title}. Please check your Calendar/Email`,
            userId:this.meetingWithId
          }
          this.socketService.notifyUpdates(dataForNotify);
          setTimeout(() => {
            this.router.navigate(['/admin']);  
          }, 1000);
        }
        else {
          this.toastr.error(apiResponse.message);
        }
      },
      (error) => {
        this.toastr.error("Some error occured");
      });//end subscribe
  }//end reSchdeuleMeting



  //goBack Method
  public goBack(): any {
    this.location.back();
  }//end goBackMethod

}

