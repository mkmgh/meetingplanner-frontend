import { Component, OnInit, OnDestroy } from '@angular/core';

//for routing
import { ActivatedRoute, Router } from '@angular/router';
//import for services
import { AppService } from '../app.service';
import { SocketService } from '../socket.service';

//import toastr
import { ToastrService } from 'ngx-toastr';

//import Cookies for user identification during page switch
import { Cookie } from 'ng2-cookies';

import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';

import {
  isSameDay,
  isSameMonth
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css'],
  providers: [SocketService]
})
export class AdminDashComponent implements OnInit, OnDestroy  {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  @ViewChild('modalAlert') modalAlert: TemplateRef<any>;

  @ViewChild('modalConfirmation') modalConfirmation: TemplateRef<any>;

  view: string = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };


  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event}): void => {
        //this.handleEvent('Edited', event);
        this.router.navigate(['/editMeeting', event.meetingId]);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        //this.events = this.events.filter(iEvent => iEvent !== event);
        //this.router.navigate(['/', event.meetingId]);
        this.handleEvent('Deleted', event);
      }
    }
  ];


  refresh: Subject<any> = new Subject();

  activeDayIsOpen: boolean = true;


  //for meeting related variables

  public authToken: any;
  public receiverId: String;
  public receiverName: String;
  public userInfo: any;
  public events: CalendarEvent[] = [];
  public meetings:any=[];
  public remindMe: boolean = true;
  public onlineUsers:any;
  public normalUsers:any;

  constructor(
    private modal: NgbModal,
    private appService: AppService,
    private socketService: SocketService,
    private _route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.userInfo = this.appService.getUserInfoFromLocalstorage();//getting userInfo which was stored in login component
    console.log(this.userInfo);
    this.authToken = Cookie.get('authToken');
    this.receiverId = Cookie.get('receiverId');//getting the authtoken, receiverId, recieverName from cookies which were set in login component.
    this.receiverName = Cookie.get('receiverName');
    this.remindMe = true
    this.verifyUserConfirmation();//function to subscribe to the event which verifies user as online.
    this.getAllMeetings();
    this.getAllNormalUsers();

    setInterval(() => {
      this.meetingReminder();// function to send the reminder to the user
    }, 5000);//will check for every two minutes
  }





  ngOnDestroy() {
    this.socketService.exitSocket()
  }


  public getOnlineUserList: any = () => {

    this.socketService.onlineUserList()
      .subscribe((userListfromdb) => {

        this.onlineUsers = '';

        for (let x in userListfromdb) {

          let temp = { 'userId': x, 'fullName': userListfromdb[x] };

          this.onlineUsers = temp;
        }

      });//end subscribe

  }//end getOnlineUserList

  public getAllNormalUsers: any = () =>{
    this.normalUsers='';
    this.appService.getAllNormalUsers(this.authToken).subscribe(
      (apiResponse) => {
        
        if (apiResponse.status == 200) {
          this.normalUsers = apiResponse.data;
          //console.log(this.normalUsers)
        }
        else{
          this.toastr.info("No normal user found");
        }
      }
    );


  }


  public verifyUserConfirmation: any = () => {

    this.socketService.verifyUser()
      .subscribe((data) => {

        this.socketService.setUser(this.authToken);//in reply to verify user emitting set-user event with authToken as parameter.

      });//end subscribe
  }//end verifyUserConfirmation




  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({event,newStart,newEnd}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    if(action === 'Deleted'){

      console.log(action === 'Deleted')
      this.modalData = { event, action };
      this.modal.open(this.modalConfirmation, { size: 'sm' });
    }else{
      this.modalData = { event, action };
      this.modal.open(this.modalContent, { size: 'lg' });
    }

    
  }


  deleteMeeting(event: any): void {
    console.log(event);    
    this.appService.deleteMeeting(event, this.authToken).subscribe((apiResponse) => {
      if (apiResponse.status == 200) {
        console.log("Deleted...");
        this.toastr.info("Deleted!", "Meeting Cancelled");
        this.getAllMeetings();
        let dataForNotify = {
          message: `Hi ${event.meetingWithName}, ${event.hostName} has cancelled the Meeting - "${event.title}". Please check your Calendar/Email`,
          userId:event.meetingWithId
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

  }



  //method to get all meetings of user
  public getAllMeetings = (userId=this.userInfo.userId) => {
  
    this.appService.getAllMeetings(userId,this.authToken).subscribe(
      (apiResponse) => {
        
        if (apiResponse.status == 200) {
          this.meetings = apiResponse.data;
          for (let meeting of this.meetings) {
            meeting.title =  meeting.title;
            meeting.start = new Date(meeting.startDate);
            meeting.end = new Date(meeting.endDate); 
            meeting.status = "snooze";
            meeting.actions = this.actions
            meeting.color = colors.blue;
          }//end for
          this.events = this.meetings;
          this.refresh.next();
        }
        else if(apiResponse.message == "No Meetings Found"){
          this.events = [];
        }
        else {
          this.toastr.error(apiResponse.message);
          this.router.navigate(['/server-error']);
        }
      },
      (error) => {
        this.toastr.error('Server Error Occured');
        this.router.navigate(['/server-error']);
      }
    );
  }//end getAdminMeetings
  

  //method for meeting reminder notification
  public meetingReminder(): any {
    let currentTime = new Date().getTime();
    for (let meeting of this.meetings) {

      if (isSameDay(new Date(), meeting.start) && new Date(meeting.start).getTime() - currentTime <= 60000
        && new Date(meeting.start).getTime() > currentTime) {

        if (this.remindMe) {

          this.modalData = { action: 'clicked', event: meeting };
          this.modal.open(this.modalAlert, { size: 'sm' });
          this.remindMe=false;
          break;
        }//end inner if

      }//end if
      else if(currentTime > new Date(meeting.start).getTime() && 
      new Date(currentTime - meeting.start).getTime()  < 10000){
        this.toastr.info(`Meeting ${meeting.title} Started!`, `Gentle Reminder`);
      }  
    }

  }//end of meetingReminder function





  public logout = () => {

    this.appService.logout().subscribe(
      (apiResponse) => {
        if (apiResponse.status === 200) {
          console.log("logout called")
          localStorage.clear();
          Cookie.delete('authToken');
          Cookie.delete('receiverId');
          Cookie.delete('receiverName');
          this.socketService.disconnectedSocket();
          this.socketService.exitSocket();
          this.router.navigate(['/login']);
        } else {
          this.toastr.error(apiResponse.message)
          this.router.navigate(['/server-error']);
        } // end condition
      },
      (err) => {
        this.toastr.error('Server error occured')
        this.router.navigate(['/server-error']);
      });

  }//end logout




}
