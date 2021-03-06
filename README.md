# Meeting Planner Application

Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop

This is a MEAN stack based application which is used to schedule the Meetings.
There are two separate parts of the application. 


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Note : You can skip this steps if you have Node ,npm and angularCLI installed on your system.
 
1) To start with this, install node and npm

* [NodeJs](https://nodejs.org/en/) - How to install node?

2) Install git 


* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - How to install Git?

3) Use npm to install Angular CLI . Exceute this command

```
>npm install -g @angular/cli
```

 
### Installing/ Running locally


1) Create a folder named as meetingplannerapp at any local drive

2) change directory to meetingplannerapp

```
>cd meetingplannerapp
```

3) Fetch the source code from my github library
 
```
>git init
```

```
>git remote add origin https://github.com/mkmgh/meetingplanner-frontend.git
```

```
>git pull origin master
```

4) Install all the modules required to run the given application with following command

```
>npm install
```

5) Run the application by using following command

```
>ng serve
```

6) Navigate to http://localhost:4200/ via browser . You will see the application is running.


* [LiveLink](http://meetingplannerapp.emayurm.in.net) - Application has been hosted.

## Screenshots of Application

### Login Page
![alt loginpage](https://github.com/mkmgh/meetingplanner-frontend/blob/master/Screenshot/login.png)

### Admin Dashboard
![alt adminpage](https://github.com/mkmgh/meetingplanner-frontend/blob/master/Screenshot/admin_page1.png)


### General User Dashboard
![alt userpage](https://github.com/mkmgh/meetingplanner-frontend/blob/master/Screenshot/General_user.png)


## More about the application

Application is having following views -


1) User management System -

    a) Signup - User is able to sign up on the platform providing all
details like FirstName, LastName, Email and Mobile number. Country
code for mobile number (like 91 for India) will be automatically selected after selecting the Country.

    b) Login - User is able to login using the credentials provided at signup.

    c) Forgot password - User can recover password using a link on email. 


2) User Authorization system -

    a) User are of two roles, normal and admin. Admin will be identified
    with a username ending with "-admin".

3) User Slots management system (Flow for normal User) -

    a) Upon login, normal User will be taken to a dashboard showing his
    current months', planned meetings, in the form of a calendar. 

    b) User is able to view only his meeting slots and he should not be
    able to make any changes as admin is the only person who can edit the meeting.

4) User Slots management system (Flow for Admin)-

    a) Upon login, Admin will be taken to a dashboard, where he/she will be able to see all normal users.

    b) Upon clicking on any user, admin will be taken to user's current calendar, with current date selected, by default.

    c) Admin is able to add/delete/update meetings on any day, by clicking on a appropriate day-cell/timeline.

5) User Alerts management system

    a) Normal User will get notifications in real time, though an alert if he is
    online, and email (irrespective of whether he is online or offline), when
        i) A meeting is created by admin
       ii) A meeting is changed by admin
      iii) 1 minute before meeting, with an option to snooze or dismiss.

6) Planner Views

    a) Planner view is design and developed in a manner where it will look like a Google calendar.

    b) The view have following Features -
        i) Planner will show only current year, past and future years will be ignored.
       ii) User will be able to change months, through an arrow button.
      iii) Day Cells are filled with the dots and count to show the meetings.
       iv) Upon click the day's cell, a view show all meetings,
            along a 24 hr timeline, with the slots covering the exact duration of each meeting.
        v) Upon clicking on a meeting, its details should pop up in another view

    c) View for Admin :
        i) For admin, a create button(at Navbar) is there in calendar view, to create a meeting.
       ii) Upon clicking on create button, admin will be able to fill the details of meeting and can schedule the meeting.
      iii) After scheduling the meeting, Admin will be able to see it on his calendar.
       iv) Upon clicking on an already created meeting, meeting details view will display meeting details.
        v) Admin can make changes in meeting details by clicking on Edit button associated with Meeting details.
       vi) Admin can delete a meeting as well, with another button available at that view.


7) Error Views and messages - Each major error response
(like 404 or 500) are handled by different pages.Like if user try to access the page that is not in the application he/she will get a 'Page Not Found Page'.


5) Documentation 

- All the APIs and Events are well documented using npm module apiDoc 

* [APIDOC](http://meetingplannerapp-api-doc.emayurm.in.net/) - APIDOC of Meeting Planner backend
* [EventDoc](http://meetingplannerapp-event-doc.emayurm.in.net/) - EventDoc of Meeting Planner Application.

## Built With

* [Angular](https://angular.io/) - The web framework used for Frontend Design
* [NPM](https://www.npmjs.com/) - Most of the modules are used
* [nodemailer](https://nodemailer.com/about/) - NPM module to send the mails
* [apiDoc](http://apidocjs.com/) - NPM module to create the apiDoc and eventDoc

## Demo credentials for testing
For Admin

  UserName: mayurmahamune7@gmail.com
  Password: Mayur@12

For General User

  UserName: yashrajmahamune154@outlook.com
  Password: Yashraj@12

## Authors

* **Mayur Mahamune** - *Initial work* - [MayurMahamune](https://github.com/mkmgh)
* **Edwisor** - *Problem Statement* - [Edwisor](https://s3-ap-southeast-1.amazonaws.com/edwisor-india-bucket/projects/web/web03/Web030102+-+Meeting+Planner.pdf)

## Acknowledgments

* Thanks Edwisor for helping to improve my skills.
