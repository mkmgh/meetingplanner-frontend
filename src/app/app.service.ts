import { Injectable } from '@angular/core';


//for using cookies
import { Cookie } from 'ng2-cookies/ng2-cookies';

//Importing the required files for http services.
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'http://localhost:3008';

  private baseURL = `${this.url}/api/v1`;


  constructor(
    public http: HttpClient
  ) { }

  public getUserInfoFromLocalstorage = () => {

    return JSON.parse(localStorage.getItem('userInfo'));

  } // end getUserInfoFromLocalstorage


  public setUserInfoInLocalStorage = (data) => {

    localStorage.setItem('userInfo', JSON.stringify(data))


  }

  public signin(data): Observable<any> {

    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);

    return this.http.post(`${this.url}/api/v1/users/login`, params);
  } // end of signinFunction function.



  //Method to get country list
  public getCountryList = () => {
    let response = this.http.get('../assets/countries.json');
    return response;
  }//end

  //method to get country code
  public getCountryCode = () => {
    let response = this.http.get('../assets/country-code-list.json');
    return response;
  }//end


  public signup(data): Observable<any> {

    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobileNumber', data.mobileNumber)
      .set('email', data.email)
      .set('password', data.password)
      .set('userName', data.userName)
      .set('country', data.country)
      .set('isAdmin', data.isAdmin)

    return this.http.post(`${this.baseURL}/users/signup`, params);

  } // end of signupFunction function.


  //Method to verify email
  public verifyEmail = (data): Observable<any> => {
    return this.http.get(`${this.baseURL}/users/${data}/verifyUser`);
  }
  //end method

  public sendResetLink(email): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
    return this.http.post(`${this.baseURL}/users/forgotPassword`, params);
  } // end of sendResetLink function.


  public resetPassword(data: any): Observable<any> {
    const params = new HttpParams()
      .set('userId', data.userId)
      .set('password', data.password);
    return this.http.post(`${this.baseURL}/users/resetPassword`, params);

  }//end resetPassword Function


  //Get All Users:
  public getAllNormalUsers = (token): Observable<any> => {
    return this.http.get(`${this.baseURL}/users/view/allUsers?authToken=${token}`)
  }



  /**
   * Meeting related services
   */

  //for getting all meetings
  public getAllMeetings(userId:string,token): Observable<any> {
    return this.http.get(`${this.baseURL}/meetings/${userId}/getAllMeetings?authToken=${token}`);
  }//end getAllMeetings function 



  //for getting meeting details
  public getMeeting(meetingId:string,token): Observable<any> {
    return this.http.get(`${this.baseURL}/meetings/${meetingId}/getMeeting?authToken=${token}`);
  }//end getMeeting function 
  



  //for edit meeting details
  public editMeeting(data,token): Observable<any> {
    
    const params = new HttpParams()
      .set('hostId', data.hostId)
      .set('hostName', data.hostName)
      .set('startDate', data.startDate)
      .set('endDate', data.endDate)
      .set('title', data.title)
      .set('venue',data.venue)
      .set('meetingWithId',data.meetingWithId)
      .set('meetingWithName',data.meetingWithName)
      .set('purpose', data.purpose)
      .set('meetingWithEmail',data.meetingWithEmail)

    return this.http.post(`${this.baseURL}/meetings/${data.meetingId}/editMeeting?authToken=${token}`,params);
  }//end editMeeting function 
  

  //for create meeting
  public createMeeting(data,token): Observable<any> {
    
    const params = new HttpParams()
      .set('hostId', data.hostId)
      .set('hostName', data.hostName)
      .set('startDate', data.startDate)
      .set('endDate', data.endDate)
      .set('title', data.title)
      .set('venue',data.venue)
      .set('meetingWithId',data.meetingWithId)
      .set('meetingWithName',data.meetingWithName)
      .set('purpose', data.purpose)
      .set('meetingWithEmail',data.meetingWithEmail)

    return this.http.post(`${this.baseURL}/meetings/createMeeting?authToken=${token}`,params);
  }//end editMeeting function 
  
  //for delete meeting
  public deleteMeeting(data,token): Observable<any> {
    return this.http.post(`${this.baseURL}/meetings/${data.meetingId}/deleteMeeting?authToken=${token}`,data);
  }//end deleteMeeting function 
  


  public logout(): Observable<any> {
    const params = new HttpParams()
    .set('authToken', Cookie.get('authToken'));
    let userdetails = this.getUserInfoFromLocalstorage();
    return this.http.post(`${this.baseURL}/users/${userdetails.userId}/logout`,params);

  } // end logout function

}
