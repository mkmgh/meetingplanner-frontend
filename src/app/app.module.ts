import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//for routing
import { RouterModule, Routes } from '@angular/router';
//for form
import { FormsModule } from '@angular/forms';

//for Http service
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './user/login/login.component';
import { UserModule } from './user/user.module';
import { CrudMeetingModule } from './crud-meeting/crud-meeting.module';
import { SortCountriesPipe } from './sort-countries.pipe';



//for toast message
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//import statement to use font awesome library
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//for loading spinner
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { GeneralDashComponent } from './general-dash/general-dash.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';


//for angular calendar

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

//import 'flatpickr/dist/flatpickr.css';
//import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

//for enabling gaurds to routes
import { RouteGuardService } from './route-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    ServerErrorComponent,
    PageNotFoundComponent,
    SortCountriesPipe,
    GeneralDashComponent,
    AdminDashComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    UserModule,
    CrudMeetingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    AngularFontAwesomeModule,
    NgbModalModule,
    //FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path:'page-not-found', component: PageNotFoundComponent},
      { path:'server-error', component:ServerErrorComponent},
      { path: 'admin', component: AdminDashComponent, canActivate:[RouteGuardService]},
      { path: 'general', component: GeneralDashComponent, canActivate:[RouteGuardService]},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '*', component: LoginComponent },
      { path: '**', component: LoginComponent }
    ])
  ],
  providers: [SortCountriesPipe, RouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
