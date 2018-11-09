import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

import { Cookie } from 'ng2-cookies';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public baseurl = "http://localhost:3008"
  public socket;

  constructor(public http: HttpClient) {
    this.socket = io(this.baseurl)
  }

    //Authentication Section:

    public verifyUser = () =>{
      return Observable.create((observer)=>{
        this.socket.on("verify-user",(socketData)=>{
          observer.next(socketData)
        })
      })
    }
  
    public setUser = (token) => {
      this.socket.emit("set-user", token)
    }
  
  
    public onlineUserList = () => {
  
      return Observable.create((observer) => {
  
        this.socket.on("onlineUsers", (userList) => {
  
          observer.next(userList);
  
        }); // end Socket
  
      }); // end Observable
  
    } // end onlineUserList


    public notifyUpdates = (data) => {
      this.socket.emit('notifyUpdates', data);
    }


    public getUpdatesFromAdmin = (userId) => {
      return Observable.create((observer) => {
        this.socket.on(userId, (data) => {
          observer.next(data);
        }); // end Socket
      }); // end Observable
    } // end getUpdatesFromAdmin


    public disconnectedSocket = () => {

      this.socket.emit("disconnect","");//end Socket
  
    }//end disconnectedSocket
  
    public exitSocket = () =>{
  
      this.socket.disconnect();
  
    }// end exit socket
  

}
