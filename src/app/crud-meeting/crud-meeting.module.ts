import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//for routing
import { RouterModule, Routes } from '@angular/router';
//for form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//for Http service
import { HttpClientModule } from '@angular/common/http';

//for toast message
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


//import statement to use font awesome library
import { AngularFontAwesomeModule } from 'angular-font-awesome';


//for angular calendar

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

//for picking calendar date
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { EditMeetingComponent } from './edit-meeting/edit-meeting.component';

//for enabling gaurd to routes
import { RouteGuardService } from '../route-guard.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModalModule.forRoot(),
    //FlatpickrModule.forRoot(),
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    RouterModule.forChild([
      { path: 'createMeeting', component:CreateMeetingComponent, canActivate:[RouteGuardService] },
      { path: 'editMeeting/:meetingId', component: EditMeetingComponent, canActivate:[RouteGuardService] }
    ])
  ],
  declarations: [CreateMeetingComponent, EditMeetingComponent],
  providers:[ RouteGuardService ]
})
export class CrudMeetingModule { }
