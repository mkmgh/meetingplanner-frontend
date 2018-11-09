(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-dash/admin-dash.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-dash/admin-dash.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    margin: 0 0 10px;\r\n}\r\n  \r\npre {\r\n    background-color: #f5f5f5;\r\n    padding: 15px;\r\n}\r\n  \r\n.header{\r\n    background-color:#b44c55;\r\n    color: white;\r\n    padding: 2%;\r\n    text-align: center;\r\n}\r\n  \r\n.header1{\r\n    background-color:#181617;\r\n    color: white;\r\n    padding: 2%;\r\n    text-align: center;\r\n}\r\n  \r\n.navbar{\r\n    cursor: pointer;\r\n}\r\n  \r\n.btn-circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    text-align: center;\r\n    padding: 6px 0;\r\n    font-size: 12px;\r\n    line-height: 1.42;\r\n    border-radius: 15px;\r\n}\r\n  \r\n.btn-circle.btn-lg {\r\n    width: 50px;\r\n    height: 50px;\r\n    padding: 10px 16px;\r\n    font-size: 18px;\r\n    line-height: 1.33;\r\n    border-radius: 25px;\r\n}\r\n  \r\n.own-navbar{\r\n    padding-bottom: 1vh;\r\n}\r\n  \r\n#card-design{\r\n    cursor:pointer;\r\n}\r\n  \r\n#card-design:hover{\r\n    background-color: lightblue;\r\n    box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}"

/***/ }),

/***/ "./src/app/admin-dash/admin-dash.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-dash/admin-dash.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Meeting Details</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n\n            <div class=\"row\">\n              <div class=\"col-4\">\n                  <h5> Title </h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.title}} by {{modalData?.event.hostName}}</h6>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-4\">\n                  <h5> Purpose </h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.purpose}}</h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5> Guest </h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.meetingWithName}}</h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5>Date and Time</h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.startDate | date: 'medium'}} - {{modalData?.event.endDate| date: 'medium'}}</h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5>Venue </h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.venue}}</h6>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #modalAlert let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Meeting Reminder</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <h6 class=\"card-title\">Your meeting <span><i> {{modalData?.event.title}} </i></span> will start soon!</h6>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"close(); remindMe=true\">Snooze</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close(); remindMe=false\">Dismiss</button>\n  </div>\n</ng-template>\n\n\n<ng-template #modalConfirmation let-close=\"close\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Delete Meeting</h5>\n      <button type=\"button\" class=\"close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <h6 class=\"card-title\">Are you sure you want to delete the following meeting?</h6>\n      <h4 class=\"card-title\">{{modalData?.event.title}}</h4>\n    </div>\n  \n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn btn-danger\" (click)=\"deleteMeeting(modalData?.event);close()\">Delete</button>\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">Cancel</button>\n    </div>\n</ng-template>\n\n<br>\n\n<div class=\"container-fluid\">\n  <div class=\"row text-center border-bottom border-info\">\n\n    <div class=\"col-12 own-navbar\">\n      <h5 class=\"header\" [routerLink]=\"['/admin']\">Meeting Planner - Admin Dashboard</h5>\n    </div>\n\n    <div class=\"col-12 own-navbar\">\n      <h5 class=\"header1\">Welcome {{receiverName ? receiverName : 'User'}}</h5>\n    </div>\n\n    <div class=\"col-sm-6 col-md-4 col-lg-4 own-navbar\">\n      <div class=\"btn-group\">\n\n        <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn btn-light btn-circle\" mwlCalendarPreviousView [view]=\"view\"\n          [(viewDate)]=\"viewDate\" (viewDateChange)=\"activeDayIsOpen = false\">\n          <i class=\"fa fa-angle-left\"></i>\n        </button>\n\n        <h5>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h5>\n\n        <button style=\"margin-left: 10px;\" type=\"button\" class=\"btn btn-light btn-circle\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"activeDayIsOpen = false\">\n          <i class=\"fa fa-angle-right\"></i>\n        </button>\n\n      </div>\n    </div>\n\n    <div class=\"col-sm-6 col-md-3 col-lg-3 own-navbar\">\n      <div class=\"btn-group\">\n        <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn btn-light\" mwlCalendarToday [(viewDate)]=\"viewDate\">\n          Today\n        </button>\n\n        <select [(ngModel)]=\"view\" name=\"view\" class=\"form-control\">\n          <option value=\"month\">Month</option>\n          <option value=\"week\">Week</option>\n          <option value=\"day\">Day</option>\n        </select>\n\n      </div>\n\n\n    </div>\n\n    \n    <div class=\"col-sm-12 col-md-3 col-lg-2 own-navbar\">\n      <div class=\"btn-group\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-danger\">\n            <a (click)=\"logout()\">Logout</a>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"col-sm-12 col-md-3 col-lg-2 own-navbar\">\n        <div class=\"btn-group\" role=\"group\">\n          <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/createMeeting']\">\n              <a>New Meeting</a>\n          </button>\n        </div>\n    </div>\n\n      \n    <div class=\"col-12\">\n      <h4 class=\"header1\">Normal Users</h4>\n        <div class=\"card my-card\" id=\"card-design\" *ngFor=\"let user of normalUsers\">\n            <div class=\"card-body p-2\" (click)=\"getAllMeetings(user.userId)\">\n              <span class=\"d-block font-adjust-heading\">{{user.firstName}} {{user.lastName}}</span>\n            </div>\n        </div>\n    </div>\n\n\n  </div>\n  <br><br>\n\n  <div class=\"row\">\n    <div class=\"col-12 border border-dark\" >\n      <div [ngSwitch]=\"view\" style=\"overflow-y:scroll\">\n        \n        <mwl-calendar-month-view *ngSwitchCase=\"'month'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\"\n          (dayClicked)=\"dayClicked($event.day)\" (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-month-view>\n\n        <mwl-calendar-week-view *ngSwitchCase=\"'week'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-week-view>\n\n        <mwl-calendar-day-view *ngSwitchCase=\"'day'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-day-view>\n\n      </div>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/admin-dash/admin-dash.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-dash/admin-dash.component.ts ***!
  \****************************************************/
/*! exports provided: AdminDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashComponent", function() { return AdminDashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for routing

//import for services


//import toastr

//import Cookies for user identification during page switch





var colors = {
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
var AdminDashComponent = /** @class */ (function () {
    function AdminDashComponent(modal, appService, socketService, _route, router, toastr) {
        var _this = this;
        this.modal = modal;
        this.appService = appService;
        this.socketService = socketService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    //this.handleEvent('Edited', event);
                    _this.router.navigate(['/editMeeting', event.meetingId]);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    //this.events = this.events.filter(iEvent => iEvent !== event);
                    //this.router.navigate(['/', event.meetingId]);
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.activeDayIsOpen = true;
        this.events = [];
        this.meetings = [];
        this.remindMe = true;
        this.getOnlineUserList = function () {
            _this.socketService.onlineUserList()
                .subscribe(function (userListfromdb) {
                _this.onlineUsers = '';
                for (var x in userListfromdb) {
                    var temp = { 'userId': x, 'fullName': userListfromdb[x] };
                    _this.onlineUsers = temp;
                }
            }); //end subscribe
        }; //end getOnlineUserList
        this.getAllNormalUsers = function () {
            _this.normalUsers = '';
            _this.appService.getAllNormalUsers(_this.authToken).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.normalUsers = apiResponse.data;
                    //console.log(this.normalUsers)
                }
                else {
                    _this.toastr.info("No normal user found");
                }
            });
        };
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser()
                .subscribe(function (data) {
                _this.socketService.setUser(_this.authToken); //in reply to verify user emitting set-user event with authToken as parameter.
            }); //end subscribe
        }; //end verifyUserConfirmation
        //method to get all meetings of user
        this.getAllMeetings = function (userId) {
            if (userId === void 0) { userId = _this.userInfo.userId; }
            _this.appService.getAllMeetings(userId, _this.authToken).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.meetings = apiResponse.data;
                    for (var _i = 0, _a = _this.meetings; _i < _a.length; _i++) {
                        var meeting = _a[_i];
                        meeting.title = meeting.title;
                        meeting.start = new Date(meeting.startDate);
                        meeting.end = new Date(meeting.endDate);
                        meeting.status = "snooze";
                        meeting.actions = _this.actions;
                        meeting.color = colors.blue;
                    } //end for
                    _this.events = _this.meetings;
                    _this.refresh.next();
                }
                else if (apiResponse.message == "No Meetings Found") {
                    _this.events = [];
                }
                else {
                    _this.toastr.error(apiResponse.message);
                    _this.router.navigate(['/server-error']);
                }
            }, function (error) {
                _this.toastr.error('Server Error Occured');
                _this.router.navigate(['/server-error']);
            });
        }; //end getAdminMeetings
        this.logout = function () {
            _this.appService.logout().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    localStorage.clear();
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('authToken');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('receiverId');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('receiverName');
                    _this.socketService.disconnectedSocket();
                    _this.socketService.exitSocket();
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                    _this.router.navigate(['/server-error']);
                } // end condition
            }, function (err) {
                _this.toastr.error('Server error occured');
                _this.router.navigate(['/server-error']);
            });
        }; //end logout
    }
    AdminDashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userInfo = this.appService.getUserInfoFromLocalstorage(); //getting userInfo which was stored in login component
        console.log(this.userInfo);
        this.authToken = ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authToken');
        this.receiverId = ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('receiverId'); //getting the authtoken, receiverId, recieverName from cookies which were set in login component.
        this.receiverName = ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('receiverName');
        this.remindMe = true;
        this.verifyUserConfirmation(); //function to subscribe to the event which verifies user as online.
        this.getAllMeetings();
        this.getAllNormalUsers();
        setInterval(function () {
            _this.meetingReminder(); // function to send the reminder to the user
        }, 5000); //will check for every two minutes
    };
    AdminDashComponent.prototype.ngOnDestroy = function () {
        this.socketService.exitSocket();
    };
    AdminDashComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    AdminDashComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    AdminDashComponent.prototype.handleEvent = function (action, event) {
        if (action === 'Deleted') {
            console.log(action === 'Deleted');
            this.modalData = { event: event, action: action };
            this.modal.open(this.modalConfirmation, { size: 'sm' });
        }
        else {
            this.modalData = { event: event, action: action };
            this.modal.open(this.modalContent, { size: 'lg' });
        }
    };
    AdminDashComponent.prototype.deleteMeeting = function (event) {
        var _this = this;
        console.log(event);
        this.appService.deleteMeeting(event, this.authToken).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                console.log("Deleted...");
                _this.toastr.info("Deleted!", "Meeting Cancelled");
                _this.getAllMeetings();
                var dataForNotify = {
                    message: "Hi " + event.meetingWithName + ", " + event.hostName + " has cancelled the Meeting - \"" + event.title + "\". Please check your Calendar/Email",
                    userId: event.meetingWithId
                };
                _this.socketService.notifyUpdates(dataForNotify);
                setTimeout(function () {
                    _this.router.navigate(['/admin']);
                }, 1000);
            }
            else {
                _this.toastr.error(apiResponse.message);
            }
        }, function (error) {
            _this.toastr.error("Some error occured");
        }); //end subscribe
    };
    //method for meeting reminder notification
    AdminDashComponent.prototype.meetingReminder = function () {
        var currentTime = new Date().getTime();
        for (var _i = 0, _a = this.meetings; _i < _a.length; _i++) {
            var meeting = _a[_i];
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isSameDay"])(new Date(), meeting.start) && new Date(meeting.start).getTime() - currentTime <= 60000
                && new Date(meeting.start).getTime() > currentTime) {
                if (this.remindMe) {
                    this.modalData = { action: 'clicked', event: meeting };
                    this.modal.open(this.modalAlert, { size: 'sm' });
                    this.remindMe = false;
                    break;
                } //end inner if
            } //end if
            else if (currentTime > new Date(meeting.start).getTime() &&
                new Date(currentTime - meeting.start).getTime() < 10000) {
                this.toastr.info("Meeting " + meeting.title + " Started!", "Gentle Reminder");
            }
        }
    }; //end of meetingReminder function
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], AdminDashComponent.prototype, "modalContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalAlert'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], AdminDashComponent.prototype, "modalAlert", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalConfirmation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], AdminDashComponent.prototype, "modalConfirmation", void 0);
    AdminDashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-dash',
            template: __webpack_require__(/*! ./admin-dash.component.html */ "./src/app/admin-dash/admin-dash.component.html"),
            styles: [__webpack_require__(/*! ./admin-dash.component.css */ "./src/app/admin-dash/admin-dash.component.css")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AdminDashComponent);
    return AdminDashComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<ng4-loading-spinner [loadingText]=\"'Please wait...'\"></ng4-loading-spinner>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'meeting-planner-frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/server-error/server-error.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _crud_meeting_crud_meeting_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crud-meeting/crud-meeting.module */ "./src/app/crud-meeting/crud-meeting.module.ts");
/* harmony import */ var _sort_countries_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sort-countries.pipe */ "./src/app/sort-countries.pipe.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _general_dash_general_dash_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./general-dash/general-dash.component */ "./src/app/general-dash/general-dash.component.ts");
/* harmony import */ var _admin_dash_admin_dash_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-dash/admin-dash.component */ "./src/app/admin-dash/admin-dash.component.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _route_guard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./route-guard.service */ "./src/app/route-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//for routing

//for form

//for Http service








//for toast message


//import statement to use font awesome library

//for loading spinner



//for angular calendar


//import 'flatpickr/dist/flatpickr.css';
//import { FlatpickrModule } from 'angularx-flatpickr';

//for enabling gaurds to routes

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_6__["ServerErrorComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                _sort_countries_pipe__WEBPACK_IMPORTED_MODULE_11__["SortCountriesPipe"],
                _general_dash_general_dash_component__WEBPACK_IMPORTED_MODULE_16__["GeneralDashComponent"],
                _admin_dash_admin_dash_component__WEBPACK_IMPORTED_MODULE_17__["AdminDashComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_9__["UserModule"],
                _crud_meeting_crud_meeting_module__WEBPACK_IMPORTED_MODULE_10__["CrudMeetingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_15__["Ng4LoadingSpinnerModule"].forRoot(),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_14__["AngularFontAwesomeModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModalModule"],
                //FlatpickrModule.forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_18__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19__["adapterFactory"]
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], pathMatch: 'full' },
                    { path: 'page-not-found', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] },
                    { path: 'server-error', component: _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_6__["ServerErrorComponent"] },
                    { path: 'admin', component: _admin_dash_admin_dash_component__WEBPACK_IMPORTED_MODULE_17__["AdminDashComponent"], canActivate: [_route_guard_service__WEBPACK_IMPORTED_MODULE_21__["RouteGuardService"]] },
                    { path: 'general', component: _general_dash_general_dash_component__WEBPACK_IMPORTED_MODULE_16__["GeneralDashComponent"], canActivate: [_route_guard_service__WEBPACK_IMPORTED_MODULE_21__["RouteGuardService"]] },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
                    { path: '**', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] }
                ])
            ],
            providers: [_sort_countries_pipe__WEBPACK_IMPORTED_MODULE_11__["SortCountriesPipe"], _route_guard_service__WEBPACK_IMPORTED_MODULE_21__["RouteGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for using cookies

//Importing the required files for http services.

//import { Observable } from 'rxjs';

var AppService = /** @class */ (function () {
    function AppService(http) {
        var _this = this;
        this.http = http;
        this.url = 'http://api-meetingplannerapp.emayurm.in.net';
        this.baseURL = this.url + "/api/v1";
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
        //Method to get country list
        this.getCountryList = function () {
            var response = _this.http.get('../assets/countries.json');
            return response;
        }; //end
        //method to get country code
        this.getCountryCode = function () {
            var response = _this.http.get('../assets/country-code-list.json');
            return response;
        }; //end
        //Method to verify email
        this.verifyEmail = function (data) {
            return _this.http.get(_this.baseURL + "/users/" + data + "/verifyUser");
        };
        //Get All Users:
        this.getAllNormalUsers = function (token) {
            return _this.http.get(_this.baseURL + "/users/view/allUsers?authToken=" + token);
        };
    }
    AppService.prototype.signin = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/login", params);
    }; // end of signinFunction function.
    AppService.prototype.signup = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobileNumber)
            .set('email', data.email)
            .set('password', data.password)
            .set('userName', data.userName)
            .set('country', data.country)
            .set('isAdmin', data.isAdmin);
        return this.http.post(this.baseURL + "/users/signup", params);
    }; // end of signupFunction function.
    //end method
    AppService.prototype.sendResetLink = function (email) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', email);
        return this.http.post(this.baseURL + "/users/forgotPassword", params);
    }; // end of sendResetLink function.
    AppService.prototype.resetPassword = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userId', data.userId)
            .set('password', data.password);
        return this.http.post(this.baseURL + "/users/resetPassword", params);
    }; //end resetPassword Function
    /**
     * Meeting related services
     */
    //for getting all meetings
    AppService.prototype.getAllMeetings = function (userId, token) {
        return this.http.get(this.baseURL + "/meetings/" + userId + "/getAllMeetings?authToken=" + token);
    }; //end getAllMeetings function 
    //for getting meeting details
    AppService.prototype.getMeeting = function (meetingId, token) {
        return this.http.get(this.baseURL + "/meetings/" + meetingId + "/getMeeting?authToken=" + token);
    }; //end getMeeting function 
    //for edit meeting details
    AppService.prototype.editMeeting = function (data, token) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('hostId', data.hostId)
            .set('hostName', data.hostName)
            .set('startDate', data.startDate)
            .set('endDate', data.endDate)
            .set('title', data.title)
            .set('venue', data.venue)
            .set('meetingWithId', data.meetingWithId)
            .set('meetingWithName', data.meetingWithName)
            .set('purpose', data.purpose)
            .set('meetingWithEmail', data.meetingWithEmail);
        return this.http.post(this.baseURL + "/meetings/" + data.meetingId + "/editMeeting?authToken=" + token, params);
    }; //end editMeeting function 
    //for create meeting
    AppService.prototype.createMeeting = function (data, token) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('hostId', data.hostId)
            .set('hostName', data.hostName)
            .set('startDate', data.startDate)
            .set('endDate', data.endDate)
            .set('title', data.title)
            .set('venue', data.venue)
            .set('meetingWithId', data.meetingWithId)
            .set('meetingWithName', data.meetingWithName)
            .set('purpose', data.purpose)
            .set('meetingWithEmail', data.meetingWithEmail);
        return this.http.post(this.baseURL + "/meetings/createMeeting?authToken=" + token, params);
    }; //end editMeeting function 
    //for delete meeting
    AppService.prototype.deleteMeeting = function (data, token) {
        return this.http.post(this.baseURL + "/meetings/" + data.meetingId + "/deleteMeeting?authToken=" + token, data);
    }; //end deleteMeeting function 
    AppService.prototype.logout = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken'));
        var userdetails = this.getUserInfoFromLocalstorage();
        return this.http.post(this.baseURL + "/users/" + userdetails.userId + "/logout", params);
    }; // end logout function
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/crud-meeting/create-meeting/create-meeting.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/crud-meeting/create-meeting/create-meeting.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icons{\r\n    color:lightblue;\r\n}\r\n\r\n#card-design{\r\n    cursor:pointer;\r\n}\r\n\r\n#card-design:hover{\r\n    background-color: lightblue;\r\n    box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.people-list {\r\n    height: 30vh;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.own-navbar{\r\n  padding-bottom: 1vh;\r\n}\r\n\r\n.item-padding{\r\n    padding-bottom: 3vh;\r\n}\r\n\r\n.container{\r\n  padding-top: 10px;\r\n  margin-top: 10px;\r\n  background-color: beige;\r\n}\r\n\r\n.header{\r\n  background-color:#19181f;\r\n  color: white;\r\n  padding: 2%;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/crud-meeting/create-meeting/create-meeting.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/crud-meeting/create-meeting/create-meeting.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n\n  <div class=\"row\">\n    <h2 class=\"col-12 header\">New Meeting Schedule</h2>\n  </div>\n\n  <div class=\"row\">\n\n    <form #meetingSchedule=\"ngForm\" class=\"col-12\">\n      <span class=\"form-heading\">Meeting Host</span>\n\n      <label for=\"inputHostName\" class=\"sr-only\">Meeting Host:</label>\n\n      <input type=\"text\" name=\"host\" [(ngModel)]=\"hostName\" class=\"form-control\" placeholder=\"Host Name\" readonly>\n\n      <br>\n\n      <span class=\"form-heading\">Meeting With </span>\n\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-sm-12\">\n          <label class=\"sr-only\">Meeting with:</label>\n          <div class=\"form-group\">\n            <div class=\"people-list\">\n              <div class=\"card my-card\" id=\"card-design\" *ngFor=\"let user of normalUsers\">\n  \n                <div class=\"card-body p-2\" (click)=\"getSelected(user)\">\n                  <span class=\"d-block font-adjust-heading\">{{user.firstName}} {{user.lastName}}</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n  \n        <div class=\"col-lg-6 col-sm-12\">\n          <p>Selected User</p>\n          <div class=\"card\" *ngIf=\"selectedUser\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{selectedUser.firstName}} {{selectedUser.lastName}}</h5>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n\t  <br>\n\n      <span class=\"form-heading\">Title </span>\n\n      <label for=\"inputTitle\" class=\"sr-only\">Title:</label>\n\n      <input type=\"text\" #title1=\"ngModel\" pattern=\"^[A-Z][A-za-z0-9]+$\" minlength=\"4\" name=\"title\" id=\"MeetingTitle\" class=\"form-control\"\n        [(ngModel)]=\"title\" placeholder=\"Meeting Title\" required>\n      <br>\n\n      <div [hidden]=\"title1.pristine || title1.valid\" class=\"alert alert-danger\">\n        <div *ngIf=\"title1.errors?.pattern\">\n          ** Meeting Title should start with Capital letter.\n        </div>\n        <div *ngIf=\"title1.errors?.minlength\">\n          ** Meeting Title should contain minimum 4 Chatracters!\n        </div>\n        <div *ngIf=\"title1.errors?.required\">\n          ** Meeting Title is required!\n        </div>\n\n      </div>\n\n      <span class=\"form-heading\">Start Time </span>\n\n      <label for=\"startTime\" class=\"sr-only\">Start Time:</label>\n      <input [owlDateTime]=\"dt1\" name=\"startDate\" [(ngModel)]=\"startDate\" placeholder=\"Date Time\" required>\n      <span [owlDateTimeTrigger]=\"dt1\">\n        <i class=\"fa fa-calendar\"></i>\n      </span>\n      <owl-date-time #dt1></owl-date-time>\n      \n      <br>\n      <br>\n\n      <span class=\"form-heading\">End Time </span>\n\n      <label for=\"endTime\" class=\"sr-only\">End Time:</label>\n      <input [owlDateTime]=\"dt2\" name=\"endDate\" [(ngModel)]=\"endDate\" placeholder=\"Date Time\" required>\n      <span [owlDateTimeTrigger]=\"dt2\">\n        <i class=\"fa fa-calendar\"></i>\n      </span>\n      <owl-date-time #dt2></owl-date-time>\n\n      <br>\n      <br>\n\n\n      <div *ngIf=\"validateDate(startDate,endDate)\" class=\"alert alert-danger\">\n        * End Date/Time cannot be before Start Date/Time.\n      </div>\n\n\n      <span class=\"form-heading\">Venue </span>\n\n      <label for=\"venue\" class=\"sr-only\">Venue:</label>\n\n      <input type=\"text\" #venue1=\"ngModel\" pattern=\"^[A-Z][A-za-z0-9-,. ]+$\" minlength=\"4\" name=\"venue\" [(ngModel)]=\"venue\" class=\"form-control\"\n        id=\"venue\" placeholder=\"Where to Meet\" required>\n      <br>\n\n      <div [hidden]=\"venue1.pristine || venue1.valid\" class=\"alert alert-danger\">\n        <div *ngIf=\"venue1.errors?.pattern\">\n          ** Venue Name should only start with Capital and contain letters,numbers,hyphen,comma,fullstop !\n        </div>\n        <div *ngIf=\"venue1.errors?.minlength\">\n          ** Venue Name should be of minimum 4 Characters!\n        </div>\n        <div *ngIf=\"venue1.errors?.required\">\n          ** Venue Name is required!\n        </div>\n\n      </div>\n\n      <span class=\"form-heading\">Purpose </span>\n\n      <label for=\"inputPurpose\" class=\"sr-only\">Purpose:</label>\n\n      <input type=\"text\" #purpose1=\"ngModel\" name=\"purpose\" [(ngModel)]=\"purpose\" class=\"form-control\" id=\"inputPurpose\" placeholder=\"Purpose of the Meeting\"\n        required>\n      <br/>\n      <div [hidden]=\"purpose1.pristine || purpose1.valid\" class=\"alert alert-danger\">\n        <div *ngIf=\"purpose1.errors?.required\">\n          ** Purpose is required!\n        </div>\n      </div>\n      <div>\n        <button class=\"col-6 btn btn-success\" (click)=\"scheduleMeeting()\">Arrange</button>\n        <button class=\"col-6 btn btn-info\" (click)=\"goBack()\">Go Back</button>\n      </div>\n\n\n      <br>\n    </form>\n\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/crud-meeting/create-meeting/create-meeting.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/crud-meeting/create-meeting/create-meeting.component.ts ***!
  \*************************************************************************/
/*! exports provided: CreateMeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMeetingComponent", function() { return CreateMeetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for routing

//import for services





var CreateMeetingComponent = /** @class */ (function () {
    function CreateMeetingComponent(appService, socketService, _route, router, toastr, location) {
        var _this = this;
        this.appService = appService;
        this.socketService = socketService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.location = location;
        this.getSelected = function (user) {
            _this.selectedUser = user;
        };
        //scheduling new meeting
        this.scheduleMeeting = function () {
            if (!_this.selectedUser) {
                _this.toastr.warning("Please select guest user", "Warning!");
            }
            else if (!_this.title) {
                _this.toastr.warning("Title is required", "Warning!");
            }
            else if (!_this.startDate) {
                _this.toastr.warning("Start time is required", "Warning!");
            }
            else if (!_this.endDate) {
                _this.toastr.warning("End time is required", "Warning!");
            }
            else if (!_this.venue) {
                _this.toastr.warning("Meeting venue is required", "Warning!");
            }
            else {
                var data_1 = {};
                data_1.hostId = _this.hostId;
                data_1.hostName = _this.hostName;
                data_1.startDate = _this.startDate.getTime();
                data_1.endDate = _this.endDate.getTime(); //changing the date&time to number of miliseconds before sending to database.
                data_1.title = _this.title;
                data_1.purpose = _this.purpose;
                data_1.venue = _this.venue;
                data_1.meetingWithId = _this.selectedUser.userId;
                data_1.meetingWithName = _this.selectedUser.firstName + " " + _this.selectedUser.lastName;
                data_1.meetingWithEmail = _this.selectedUser.email;
                _this.appService.createMeeting(data_1, _this.authToken).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success("Success!", "Meeting Scheduled");
                        var dataForNotify = {
                            message: "Hi " + _this.selectedUser.firstName + " " + _this.selectedUser.lastName + ", " + _this.hostName + " has schedule the Meeting - " + data_1.title + ". Please check your Calendar/Email",
                            userId: _this.selectedUser.userId
                        };
                        _this.socketService.notifyUpdates(dataForNotify);
                        setTimeout(function () {
                            _this.router.navigate(['/admin']);
                        }, 1000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (error) {
                    _this.toastr.error("Some error occured"); //error page in case of error.
                }); //end subscribe
            } //end of else
        }; //end scheduleMeeting
        this.getAllNormalUsers = function () {
            _this.appService.getAllNormalUsers(_this.authToken).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.normalUsers = apiResponse.data;
                }
                else {
                    _this.toastr.info("No normal user found");
                }
            });
        };
    }
    CreateMeetingComponent.prototype.ngOnInit = function () {
        this.authToken = ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken');
        this.hostId = ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverId');
        this.hostName = ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverName'); //getting the receiverId, name to use as the meeting partners.
        this.userInfo = this.appService.getUserInfoFromLocalstorage(); //getting the details of the admin from local storage.
        if (!this.userInfo.isAdmin) {
            this.router.navigate(['/general']); //checking is the user reached here is not admin then redirect to normal user dashboard.
        }
        this.getAllNormalUsers();
    };
    CreateMeetingComponent.prototype.validateDate = function (startDate, endDate) {
        var start = new Date(startDate);
        var end = new Date(endDate);
        if (end < start) {
            return true;
        }
        else {
            return false;
        }
    }; //end validateDate
    //goBack Method
    CreateMeetingComponent.prototype.goBack = function () {
        this.location.back();
    }; //end goBackMethod
    CreateMeetingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-meeting',
            template: __webpack_require__(/*! ./create-meeting.component.html */ "./src/app/crud-meeting/create-meeting/create-meeting.component.html"),
            styles: [__webpack_require__(/*! ./create-meeting.component.css */ "./src/app/crud-meeting/create-meeting/create-meeting.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], CreateMeetingComponent);
    return CreateMeetingComponent;
}());



/***/ }),

/***/ "./src/app/crud-meeting/crud-meeting.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/crud-meeting/crud-meeting.module.ts ***!
  \*****************************************************/
/*! exports provided: CrudMeetingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudMeetingModule", function() { return CrudMeetingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _create_meeting_create_meeting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-meeting/create-meeting.component */ "./src/app/crud-meeting/create-meeting/create-meeting.component.ts");
/* harmony import */ var _edit_meeting_edit_meeting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-meeting/edit-meeting.component */ "./src/app/crud-meeting/edit-meeting/edit-meeting.component.ts");
/* harmony import */ var _route_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../route-guard.service */ "./src/app/route-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//for routing

//for form


//for angular calendar



//for picking calendar date



//for enabling gaurd to routes

var CrudMeetingModule = /** @class */ (function () {
    function CrudMeetingModule() {
    }
    CrudMeetingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"].forRoot(),
                //FlatpickrModule.forRoot(),
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlNativeDateTimeModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__["adapterFactory"]
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: 'createMeeting', component: _create_meeting_create_meeting_component__WEBPACK_IMPORTED_MODULE_9__["CreateMeetingComponent"], canActivate: [_route_guard_service__WEBPACK_IMPORTED_MODULE_11__["RouteGuardService"]] },
                    { path: 'editMeeting/:meetingId', component: _edit_meeting_edit_meeting_component__WEBPACK_IMPORTED_MODULE_10__["EditMeetingComponent"], canActivate: [_route_guard_service__WEBPACK_IMPORTED_MODULE_11__["RouteGuardService"]] }
                ])
            ],
            declarations: [_create_meeting_create_meeting_component__WEBPACK_IMPORTED_MODULE_9__["CreateMeetingComponent"], _edit_meeting_edit_meeting_component__WEBPACK_IMPORTED_MODULE_10__["EditMeetingComponent"]],
            providers: [_route_guard_service__WEBPACK_IMPORTED_MODULE_11__["RouteGuardService"]]
        })
    ], CrudMeetingModule);
    return CrudMeetingModule;
}());



/***/ }),

/***/ "./src/app/crud-meeting/edit-meeting/edit-meeting.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/crud-meeting/edit-meeting/edit-meeting.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding-top: 10px;\r\n    margin-top: 10px;\r\n    background-color: beige;\r\n}\r\n\r\n.header{\r\n    background-color:#19181f;\r\n    color: white;\r\n    padding: 2%;\r\n    text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/crud-meeting/edit-meeting/edit-meeting.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/crud-meeting/edit-meeting/edit-meeting.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n\n  <div class=\"row\">\n\n    <h2 class=\"col-12 header\">Update Meeting Schedule</h2>\n\n  </div>\n\n  <div class=\"row\">\n\n    <form #meetingSchedule=\"ngForm\" class=\"col-12\">\n      <span class=\"form-heading\">Meeting Host </span>\n\n      <label for=\"inputHostName\" class=\"sr-only\">Meeting Host:</label>\n\n      <input type=\"text\" name=\"host\" [(ngModel)]=\"hostName\" class=\"form-control\" placeholder=\"Host Name\" readonly>\n\n      <br>\n      <span class=\"form-heading\">Meeting With </span>\n\n      <label for=\"inputHostName\" class=\"sr-only\">Meeting with:</label>\n\n      <input type=\"text\" name=\"reciever\" [(ngModel)]=\"meetingWithName\" class=\"form-control\" placeholder=\"Meeting With Name\" readonly>\n      <br>\n\n      <span class=\"form-heading\">Title </span>\n\n      <label for=\"inputTitle\" class=\"sr-only\">Title:</label>\n\n      <input type=\"text\" #title1=\"ngModel\" pattern=\"^[A-Z][A-za-z0-9]+$\" minlength=\"4\" name=\"title\" id=\"MeetingTitle\" class=\"form-control\"\n        [(ngModel)]=\"title\" placeholder=\"Meeting Title\" required>\n      <br>\n\n      <div [hidden]=\"title1.pristine || title1.valid\" class=\"alert alert-danger\">\n        <div *ngIf=\"title1.errors?.pattern\">\n          ** Meeting Title should start with Capital letter.\n        </div>\n        <div *ngIf=\"title1.errors?.minlength\">\n          ** Meeting Title should contain minimum 4 Chatracters!\n        </div>\n        <div *ngIf=\"title1.errors?.required\">\n          ** Meeting Title is required!\n        </div>\n\n      </div>\n\n      <span class=\"form-heading\">Start Time </span>\n\n      <label for=\"startTime\" class=\"sr-only\">Start Time:</label>\n      <input [owlDateTime]=\"dt1\" name=\"startDate\" [(ngModel)]=\"startDate\" placeholder=\"Date Time\">\n      <span [owlDateTimeTrigger]=\"dt1\">\n        <i class=\"fa fa-calendar\"></i>\n      </span>\n      <owl-date-time #dt1></owl-date-time>\n      \n      <br>\n      <br>\n\n      <span class=\"form-heading\">End Time </span>\n\n      <label for=\"endTime\" class=\"sr-only\">End Time:</label>\n      <input [owlDateTime]=\"dt2\" name=\"endDate\" [(ngModel)]=\"endDate\" placeholder=\"Date Time\">\n      <span [owlDateTimeTrigger]=\"dt2\">\n        <i class=\"fa fa-calendar\"></i>\n      </span>\n      <owl-date-time #dt2></owl-date-time>\n\n      <br>\n      <br>\n\n\n      <div *ngIf=\"validateDate(startDate,endDate)\" class=\"alert alert-danger\">\n        * End Date/Time cannot be before Start Date/Time.\n      </div>\n\n\n      <span class=\"form-heading\">Venue </span>\n\n      <label for=\"venue\" class=\"sr-only\">Venue:</label>\n\n      <input type=\"text\" #venue1=\"ngModel\" pattern=\"^[A-Z][A-za-z0-9-,. ]+$\" minlength=\"4\" name=\"venue\" [(ngModel)]=\"venue\" class=\"form-control\"\n        id=\"venue\" placeholder=\"Where to Meet\" required>\n      <br>\n\n      <div [hidden]=\"venue1.pristine || venue1.valid\" class=\"alert alert-danger\">\n        <div *ngIf=\"venue1.errors?.pattern\">\n          ** Venue Name should only start with Capital and contain letters,numbers,hyphen,comma,fullstop !\n        </div>\n        <div *ngIf=\"venue1.errors?.minlength\">\n          ** Venue Name should be of minimum 4 Characters!\n        </div>\n        <div *ngIf=\"venue1.errors?.required\">\n          ** Venue Name is required!\n        </div>\n\n      </div>\n\n      <span class=\"form-heading\">Purpose</span>\n\n      <label for=\"inputPurpose\" class=\"sr-only\">Purpose:</label>\n\n      <input type=\"text\" #purpose1=\"ngModel\" name=\"purpose\" [(ngModel)]=\"purpose\" class=\"form-control\" id=\"inputPurpose\" placeholder=\"Purpose of the Meeting\"\n        required>\n      <br/>\n      <div [hidden]=\"purpose1.pristine || purpose1.valid\" class=\"alert alert-danger\">\n        <div *ngIf=\"purpose1.errors?.required\">\n          ** Purpose is required!\n        </div>\n      </div>\n      <div>\n        <button class=\"col-6 btn btn-success\" (click)=\"updateScheduleMeeting()\">Commit</button>\n        <button class=\"col-6 btn btn-info\" (click)=\"goBack()\">Go Back</button>\n      </div>\n\n\n      <br>\n    </form>\n\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/crud-meeting/edit-meeting/edit-meeting.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/crud-meeting/edit-meeting/edit-meeting.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditMeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMeetingComponent", function() { return EditMeetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for routing

//import for services





var EditMeetingComponent = /** @class */ (function () {
    function EditMeetingComponent(appService, socketService, _route, router, toastr, location) {
        this.appService = appService;
        this.socketService = socketService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.location = location;
    }
    EditMeetingComponent.prototype.ngOnInit = function () {
        this.hostId = ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverId');
        this.hostName = ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverName');
        this.authToken = ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken');
        this.userInfo = this.appService.getUserInfoFromLocalstorage();
        this.meetingId = this._route.snapshot.params['meetingId'];
        this.getMeeting();
    };
    EditMeetingComponent.prototype.ngOnDestroy = function () {
        this.socketService.exitSocket();
    };
    EditMeetingComponent.prototype.getMeeting = function () {
        var _this = this;
        this.appService.getMeeting(this.meetingId, this.authToken)
            .subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.startDate = new Date(apiResponse.data.startDate);
                _this.endDate = new Date(apiResponse.data.endDate);
                _this.title = apiResponse.data.title;
                _this.venue = apiResponse.data.venue;
                _this.purpose = apiResponse.data.purpose;
                _this.meetingWithId = apiResponse.data.meetingWithId;
                _this.meetingWithName = apiResponse.data.meetingWithName;
                _this.meetingWithEmail = apiResponse.data.meetingWithEmail;
            }
            else {
                _this.toastr.error(apiResponse.message);
            }
        }, function (error) {
            _this.toastr.error("Some error occured");
        }); //end subscribe
    }; //end getMeeting
    EditMeetingComponent.prototype.validateDate = function (startDate, endDate) {
        var start = new Date(startDate);
        var end = new Date(endDate);
        if (end < start) {
            return true;
        }
        else {
            return false;
        }
    }; //end validateDate
    EditMeetingComponent.prototype.updateScheduleMeeting = function () {
        var _this = this;
        var data = {};
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
        data.meetingWithEmail = this.meetingWithEmail;
        this.appService.editMeeting(data, this.authToken)
            .subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.toastr.info("Success!", "Meeting details updated");
                var dataForNotify = {
                    message: "Hi " + _this.meetingWithName + ", " + _this.hostName + " has reschedule the Meeting - " + data.title + ". Please check your Calendar/Email",
                    userId: _this.meetingWithId
                };
                _this.socketService.notifyUpdates(dataForNotify);
                setTimeout(function () {
                    _this.router.navigate(['/admin']);
                }, 1000);
            }
            else {
                _this.toastr.error(apiResponse.message);
            }
        }, function (error) {
            _this.toastr.error("Some error occured");
        }); //end subscribe
    }; //end reSchdeuleMeting
    //goBack Method
    EditMeetingComponent.prototype.goBack = function () {
        this.location.back();
    }; //end goBackMethod
    EditMeetingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-meeting',
            template: __webpack_require__(/*! ./edit-meeting.component.html */ "./src/app/crud-meeting/edit-meeting/edit-meeting.component.html"),
            styles: [__webpack_require__(/*! ./edit-meeting.component.css */ "./src/app/crud-meeting/edit-meeting/edit-meeting.component.css")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], EditMeetingComponent);
    return EditMeetingComponent;
}());



/***/ }),

/***/ "./src/app/general-dash/general-dash.component.css":
/*!*********************************************************!*\
  !*** ./src/app/general-dash/general-dash.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    margin: 0 0 10px;\r\n}\r\n  \r\npre {\r\n    background-color: #f5f5f5;\r\n    padding: 15px;\r\n}\r\n  \r\n.header{\r\n    background-color:#b44c55;\r\n    color: white;\r\n    padding: 2%;\r\n    text-align: center;\r\n}\r\n  \r\n.header1{\r\n    background-color:#181617;\r\n    color: white;\r\n    padding: 2%;\r\n    text-align: center;\r\n}\r\n  \r\n.navbar{\r\n    cursor: pointer;\r\n}\r\n  \r\n.btn-circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    text-align: center;\r\n    padding: 6px 0;\r\n    font-size: 12px;\r\n    line-height: 1.42;\r\n    border-radius: 15px;\r\n}\r\n  \r\n.btn-circle.btn-lg {\r\n    width: 50px;\r\n    height: 50px;\r\n    padding: 10px 16px;\r\n    font-size: 18px;\r\n    line-height: 1.33;\r\n    border-radius: 25px;\r\n}\r\n  \r\n.own-navbar{\r\n    padding-bottom: 1vh;\r\n}"

/***/ }),

/***/ "./src/app/general-dash/general-dash.component.html":
/*!**********************************************************!*\
  !*** ./src/app/general-dash/general-dash.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Meeting Details</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n\n            <div class=\"row\">\n              <div class=\"col-4\">\n                  <h5> Title </h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.title}} by {{modalData?.event.hostName}}</h6>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-4\">\n                  <h5> Purpose </h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.purpose}}</h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5> Guest </h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.meetingWithName}}</h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5>Date and Time</h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.startDate | date: 'medium'}} - {{modalData?.event.endDate| date: 'medium'}}</h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5>Venue </h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.venue}}</h6>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #modalAlert let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Meeting Reminder</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <h6 class=\"card-title\">Your meeting <span><i> {{modalData?.event.title}} </i></span> will start soon!</h6>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"close(); remindMe=true\">Snooze</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close(); remindMe=false\">Dismiss</button>\n  </div>\n</ng-template>\n\n<br>\n\n<div class=\"container-fluid\">\n  <div class=\"row text-center border-bottom border-info\">\n\n    <div class=\"col-12 own-navbar\">\n      <h5 class=\"header\">Meeting Planner - User Dashboard</h5>\n    </div>\n\n    <div class=\"col-12 own-navbar\">\n      <h5 class=\"header1\">Welcome {{receiverName ? receiverName : 'User'}}</h5>\n    </div>\n\n    <div class=\"col-sm-6 col-md-4 col-lg-4 own-navbar\">\n      <div class=\"btn-group\">\n\n        <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn btn-light btn-circle\" mwlCalendarPreviousView [view]=\"view\"\n          [(viewDate)]=\"viewDate\" (viewDateChange)=\"activeDayIsOpen = false\">\n          <i class=\"fa fa-angle-left\"></i>\n        </button>\n\n        <h5>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h5>\n\n        <button style=\"margin-left: 10px;\" type=\"button\" class=\"btn btn-light btn-circle\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"activeDayIsOpen = false\">\n          <i class=\"fa fa-angle-right\"></i>\n        </button>\n\n      </div>\n    </div>\n\n    <div class=\"col-sm-6 col-md-3 col-lg-3 own-navbar\">\n      <div class=\"btn-group\">\n        <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn btn-light\" mwlCalendarToday [(viewDate)]=\"viewDate\">\n          Today\n        </button>\n\n        <select [(ngModel)]=\"view\" name=\"view\" class=\"form-control\">\n          <option value=\"month\">Month</option>\n          <option value=\"week\">Week</option>\n          <option value=\"day\">Day</option>\n        </select>\n\n      </div>\n\n\n    </div>\n\n    \n    <div class=\"col-sm-12 col-md-3 col-lg-2 own-navbar\">\n      <div class=\"btn-group\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-danger\">\n            <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n        </button>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-12 border border-dark\" >\n\n      <div [ngSwitch]=\"view\" style=\"overflow-y:scroll\">\n        <mwl-calendar-month-view *ngSwitchCase=\"'month'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\"\n          (dayClicked)=\"dayClicked($event.day)\" (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-month-view>\n\n        <mwl-calendar-week-view *ngSwitchCase=\"'week'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-week-view>\n\n        <mwl-calendar-day-view *ngSwitchCase=\"'day'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-day-view>\n\n      </div>\n\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/general-dash/general-dash.component.ts":
/*!********************************************************!*\
  !*** ./src/app/general-dash/general-dash.component.ts ***!
  \********************************************************/
/*! exports provided: GeneralDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralDashComponent", function() { return GeneralDashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for routing

//import for services


//import toastr

//import Cookies for user identification during page switch





var colors = {
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
var GeneralDashComponent = /** @class */ (function () {
    function GeneralDashComponent(modal, appService, socketService, _route, router, toastr) {
        var _this = this;
        this.modal = modal;
        this.appService = appService;
        this.socketService = socketService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.view = 'month';
        this.viewDate = new Date();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.activeDayIsOpen = true;
        this.events = [];
        this.meetings = [];
        this.remindMe = true;
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser()
                .subscribe(function (data) {
                _this.socketService.setUser(_this.authToken); //in reply to verify user emitting set-user event with authToken as parameter.
            }); //end subscribe
        }; //end verifyUserConfirmation
        //method to get all meetings of user
        this.getAllMeetings = function (userId) {
            if (userId === void 0) { userId = _this.userInfo.userId; }
            _this.appService.getAllMeetings(userId, _this.authToken).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.meetings = apiResponse.data;
                    for (var _i = 0, _a = _this.meetings; _i < _a.length; _i++) {
                        var meeting = _a[_i];
                        meeting.title = meeting.title;
                        meeting.start = new Date(meeting.startDate);
                        meeting.end = new Date(meeting.endDate);
                        meeting.status = "snooze";
                        meeting.color = colors.red;
                    } //end for
                    _this.events = _this.meetings;
                    _this.refresh.next();
                }
                else if (apiResponse.message == "No Meetings Found") {
                    _this.events = [];
                }
                else {
                    _this.toastr.error(apiResponse.message);
                    _this.router.navigate(['/server-error']);
                }
            }, function (error) {
                _this.toastr.error('Server Error Occured');
                _this.router.navigate(['/server-error']);
            });
        }; //end getAllMeetings
        this.logout = function () {
            _this.appService.logout().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    localStorage.clear();
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('authToken');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('receiverId');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('receiverName');
                    _this.socketService.disconnectedSocket();
                    _this.socketService.exitSocket();
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                    _this.router.navigate(['/server-error']);
                } // end condition
            }, function (err) {
                _this.toastr.error('Server error occured');
                _this.router.navigate(['/server-error']);
            });
        }; //end logout
        //to listen updates from admin from socket
        this.getUpdatesFromAdmin = function () {
            _this.socketService.getUpdatesFromAdmin(_this.receiverId).subscribe(function (data) {
                _this.getAllMeetings();
                _this.toastr.info("Alert form Admin!", data.message);
            });
        };
    }
    GeneralDashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userInfo = this.appService.getUserInfoFromLocalstorage(); //getting userInfo which was stored in login component
        this.authToken = ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authToken');
        this.receiverId = ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('receiverId'); //getting the authtoken, receiverId, recieverName from cookies which were set in login component.
        this.receiverName = ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('receiverName');
        this.remindMe = true;
        this.verifyUserConfirmation(); //function to subscribe to the event which verifies user as online.
        this.getAllMeetings();
        setInterval(function () {
            _this.meetingReminder(); // function to send the reminder to the user
        }, 5000); //will check for every two minutes
        this.getUpdatesFromAdmin();
    };
    GeneralDashComponent.prototype.ngOnDestroy = function () {
        this.socketService.exitSocket();
    };
    GeneralDashComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    GeneralDashComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    GeneralDashComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    //method for meeting reminder notification
    GeneralDashComponent.prototype.meetingReminder = function () {
        var currentTime = new Date().getTime();
        for (var _i = 0, _a = this.meetings; _i < _a.length; _i++) {
            var meeting = _a[_i];
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isSameDay"])(new Date(), meeting.start) && new Date(meeting.start).getTime() - currentTime <= 60000
                && new Date(meeting.start).getTime() > currentTime) {
                if (this.remindMe) {
                    this.modalData = { action: 'clicked', event: meeting };
                    this.modal.open(this.modalAlert, { size: 'sm' });
                    this.remindMe = false;
                    break;
                } //end inner if
            } //end if
            else if (currentTime > new Date(meeting.start).getTime() &&
                new Date(currentTime - meeting.start).getTime() < 10000) {
                this.toastr.info("Meeting " + meeting.title + " Started!", "Gentle Reminder");
            }
        }
    }; //end of meetingReminder function
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], GeneralDashComponent.prototype, "modalContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalAlert'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], GeneralDashComponent.prototype, "modalAlert", void 0);
    GeneralDashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-general-dash',
            template: __webpack_require__(/*! ./general-dash.component.html */ "./src/app/general-dash/general-dash.component.html"),
            styles: [__webpack_require__(/*! ./general-dash.component.css */ "./src/app/general-dash/general-dash.component.css")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], GeneralDashComponent);
    return GeneralDashComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div>\n    <div class=\"row mt-5\">\n      <div class=\"col-12\">\n        <img src=\"../../assets/not_found.jpg\" style=\"width:102vmin;height:52vmin\"\n          class=\"img-fluid d-block mx-auto\">\n      </div>\n    </div>\n    <div class=\"row mt-4\">\n      <div class=\"col-12 text-center\">\n          <div class=\"alert alert-danger\" role=\"alert\">\n              User not available, with given email address\n          </div>\n        <h5 class=\"text-danger\">Create account, \n          <a [routerLink]=\"['/signup']\">Signup</a>\n        </h5>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/route-guard.service.ts":
/*!****************************************!*\
  !*** ./src/app/route-guard.service.ts ***!
  \****************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RouteGuardService = /** @class */ (function () {
    function RouteGuardService(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    RouteGuardService.prototype.canActivate = function (route) {
        console.log("in guard service");
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authToken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authToken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authToken') === null) {
            this.toastr.error("Token Expired, Please login again");
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    RouteGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], RouteGuardService);
    return RouteGuardService;
}());



/***/ }),

/***/ "./src/app/server-error/server-error.component.css":
/*!*********************************************************!*\
  !*** ./src/app/server-error/server-error.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/server-error/server-error.component.html":
/*!**********************************************************!*\
  !*** ./src/app/server-error/server-error.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div>\n    <div class=\"row mt-5\">\n      <div class=\"col-12\">\n        <img src=\"https://i.stack.imgur.com/QQOcg.jpg\" style=\"width:102vmin;height:52vmin\"\n          class=\"img-fluid d-block mx-auto\">\n      </div>\n    </div>\n    <div class=\"row mt-4\">\n      <div class=\"col-12 text-center\">\n        <h5 class=\"text-danger\">Try Again after email verification\n            <a [routerLink]=\"['/login']\">Redirect to Login</a>\n        </h5>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/server-error/server-error.component.ts":
/*!********************************************************!*\
  !*** ./src/app/server-error/server-error.component.ts ***!
  \********************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent() {
    }
    ServerErrorComponent.prototype.ngOnInit = function () {
    };
    ServerErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-server-error',
            template: __webpack_require__(/*! ./server-error.component.html */ "./src/app/server-error/server-error.component.html"),
            styles: [__webpack_require__(/*! ./server-error.component.css */ "./src/app/server-error/server-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = /** @class */ (function () {
    function SocketService(http) {
        var _this = this;
        this.http = http;
        this.baseurl = "http://api-meetingplannerapp.emayurm.in.net";
        //Authentication Section:
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("verify-user", function (socketData) {
                    observer.next(socketData);
                });
            });
        };
        this.setUser = function (token) {
            _this.socket.emit("set-user", token);
        };
        this.onlineUserList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("onlineUsers", function (userList) {
                    observer.next(userList);
                }); // end Socket
            }); // end Observable
        }; // end onlineUserList
        this.notifyUpdates = function (data) {
            _this.socket.emit('notifyUpdates', data);
        };
        this.getUpdatesFromAdmin = function (userId) {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end getUpdatesFromAdmin
        this.disconnectedSocket = function () {
            _this.socket.emit("disconnect", ""); //end Socket
        }; //end disconnectedSocket
        this.exitSocket = function () {
            _this.socket.disconnect();
        }; // end exit socket
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.baseurl);
    }
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/sort-countries.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/sort-countries.pipe.ts ***!
  \****************************************/
/*! exports provided: SortCountriesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortCountriesPipe", function() { return SortCountriesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortCountriesPipe = /** @class */ (function () {
    function SortCountriesPipe() {
    }
    SortCountriesPipe.prototype.transform = function (array, args) {
        if (array == null) {
            return null;
        }
        var finalArray = array.sort(function (a, b) {
            var textA = a['value'].toLowerCase();
            var textB = b['value'].toLowerCase();
            return textA < textB ? -1 : (textA > textB) ? 1 : 0;
        });
        return finalArray;
    };
    SortCountriesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sortCountries'
        })
    ], SortCountriesPipe);
    return SortCountriesPipe;
}());



/***/ }),

/***/ "./src/app/user/email-verify/email-verify.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/email-verify/email-verify.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/email-verify/email-verify.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/email-verify/email-verify.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"success==1\">\n    <div class=\"row mt-5\">\n\n    </div>\n    <div class=\"row mt-4\">\n      <div class=\"col-12 text-center\">\n        <h2 class=\"text-success\">\n          <i class=\"fa fa-check-circle\"></i>Email Verified!</h2>\n        <h5 class=\"text-danger\">Thanks for signing up in TO-DO Application. Please\n          <a [routerLink]=\"['/login']\">Login</a>\n        </h5>\n      </div>\n    </div>\n  </div>\n  <!--success end-->\n  <!---failure start-->\n  <div *ngIf=\"failure==1\">\n    <div class=\"row mt-5\">\n\n    </div>\n    <div class=\"row mt-4\">\n      <div class=\"col-12 text-center\">\n        <h2 class=\"text-danger\">\n          <i class=\"fa fa-times-circle\"></i>Email Not Verified!</h2>\n        <h5 class=\"text-danger\">Oops!Some Error Occured!.Please again\n          <a [routerLink]=\"['/signup']\">SignUp</a>\n        </h5>\n      </div>\n    </div>\n\n  </div>\n  <!-- failure end -->\n</div>"

/***/ }),

/***/ "./src/app/user/email-verify/email-verify.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/email-verify/email-verify.component.ts ***!
  \*************************************************************/
/*! exports provided: EmailVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerifyComponent", function() { return EmailVerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailVerifyComponent = /** @class */ (function () {
    function EmailVerifyComponent(route, router, appService) {
        this.route = route;
        this.router = router;
        this.appService = appService;
    }
    EmailVerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = this.route.snapshot.paramMap.get('userId');
        this.appService.verifyEmail(this.data).subscribe(function (Response) {
            if (Response.status === 200) {
                _this.success = 1;
            }
            else {
                _this.failure = 1;
            }
        }, function (error) {
        });
    };
    EmailVerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-verify',
            template: __webpack_require__(/*! ./email-verify.component.html */ "./src/app/user/email-verify/email-verify.component.html"),
            styles: [__webpack_require__(/*! ./email-verify.component.css */ "./src/app/user/email-verify/email-verify.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], EmailVerifyComponent);
    return EmailVerifyComponent;
}());



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark\" style=\"background-color: #67aee0;\">\n\n  <a class=\"navbar-brand\" href=\"/\">Meeting Planner Application</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignUp()\">Signup</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\" style=\"background-color: #c9ced1;\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Email Address</h2>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" #emailId=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n\n    <br>\n\n    <div [hidden]=\"emailId.valid || emailId.pristine\" class=\"alert alert-danger\">\n      <div *ngIf=\"emailId.errors?.pattern\">\n       Warning : Email is invalid!\n\n      </div>\n      <div *ngIf=\"emailId.errors?.required\">\n       Warning : Email is required!\n      </div>\n    </div>\n\n\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"sendResetLinkFunction()\">Send Reset Link</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import for toastr

//for Service

//for routing

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(appService, _route, router, toastr) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.sendResetLinkFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('enter email address');
            }
            _this.appService.sendResetLink(_this.email)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Reset Link Sent SuccessFully", "Success!");
                    setTimeout(function () {
                        _this.router.navigate(['/login']);
                    }, 2000);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error! Try Again");
                }
            }, function (error) {
                _this.toastr.error("Some Error Occurred", "Error!");
            });
        }; //end of sendResetLink 
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.goToSignUp = function () {
        this.router.navigate(['/signup']);
    }; //end goToSignUp
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/user/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark\" style=\"background-color: #67aee0;\">\n\n  <a class=\"navbar-brand\" href=\"/\">Meeting Planner Application</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" style=\"cursor: pointer\" (click) = \"goToSignUp()\" >SignUp</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\" style=\"background-color: #c9ced1;\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n\n    <br>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\"  (keydown)=\"doLoginUsingKeypress($event)\" required>\n\n    <br>\n\n\n    <a [routerLink]=\"['/forgot-password']\">Forgot Password ?</a>\n\n    <br><br>\n\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click) = \"signinFunction()\" >Sign in</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//routing

//cookie for Identifying user

//app service file

//import for toastr

//for loading spinner

var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router, toastr, spinnerService) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.goToSignUp = function () {
            _this.router.navigate(['/signup']);
        }; // end goToSignUp
        this.signinFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.spinnerService.show();
                _this.appService.signin(data)
                    .subscribe(function (apiResponse) {
                    console.log(apiResponse);
                    if (apiResponse.status === 200) {
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('authToken', apiResponse.data.authToken);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        //   this.router.navigate(['/']);
                        setTimeout(function () {
                            if (apiResponse.data.userDetails.isAdmin) {
                                _this.router.navigate(['/admin']);
                            }
                            else {
                                _this.router.navigate(['/general']);
                            }
                        }, 1000);
                    }
                    else {
                        setTimeout(function () {
                            _this.spinnerService.hide();
                            _this.toastr.error(apiResponse.message);
                        }, 1000);
                    }
                }, function (err) {
                    if (err.status == 404) {
                        setTimeout(function () {
                            _this.spinnerService.hide();
                            _this.router.navigate(['/page-not-found']);
                        }, 1000);
                    }
                    else if (err.status == 500) {
                        setTimeout(function () {
                            _this.spinnerService.hide();
                            _this.router.navigate(['/server-error']);
                        }, 1000);
                    }
                    else if (err.status == 400) {
                        setTimeout(function () {
                            _this.spinnerService.hide();
                            _this.toastr.error('Password incorrect');
                        });
                    }
                    else {
                        setTimeout(function () {
                            _this.spinnerService.hide();
                            _this.router.navigate(['/signup']);
                            _this.toastr.error('Please, create account');
                        });
                    }
                });
            } // end condition
        }; // end signinFunction
        this.doLoginUsingKeypress = function (event) {
            if (event.keyCode === 13) { // 13 is keycode of enter.
                _this.signinFunction();
            }
        }; // end sendMessageUsingKeypress
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark\"  style=\"background-color: #67aee0;\">\n\n  <a class=\"navbar-brand\" href=\"/\">Issue Tracker Tool</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignUp()\">SignUp</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\" style=\"background-color: #c9ced1;\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Password Reset</h2>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" #pass=\"ngModel\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" id=\"inputPassword\" class=\"form-control\"\n      [(ngModel)]=\"password\" placeholder=\"Password\" required>\n\n    <br>\n    <div [hidden]=\"pass.valid || pass.pristine\" class=\"alert alert-danger\">\n      <div *ngIf=\"pass.errors?.pattern\">\n        Warning : Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters!\n      </div>\n      <div *ngIf=\"pass.errors?.required\">\n        Warning : Password is required!\n      </div>\n    </div>\n\n\n\n\n\n\n    <label for=\"inputPassword\" class=\"sr-only\">Confirm Password</label>\n\n    <input type=\"password\" #conPass=\"ngModel\" id=\"inputPassword1\" class=\"form-control\" [(ngModel)]=\"confirmPassword\" placeholder=\"Confirm Password\"\n      required>\n\n    <br>\n\n    <div [hidden]=\"conPass.pristine || password==confirmPassword\" class=\"alert alert-danger\">\n      <div *ngIf=\"password!=confirmPassword\">\n        Warning : Password and Confirm Password does not match!\n      </div>\n      <div *ngIf=\"conPass.errors?.required\">\n        Warning: Confirm Password is required!\n      </div>\n    </div>\n\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"resetPassword()\">Change Password</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import for toastr

//for Service

//for routing

var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(appService, _route, router, toastr) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.userId = this._route.snapshot.paramMap.get('userId');
        this.data = {};
        this.resetPassword = function () {
            if (_this.matchPassword()) {
                _this.data.userId = _this.userId;
                _this.data.password = _this.password;
                _this.appService.resetPassword(_this.data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success("Password Reset Succesfull", "Success!");
                        setTimeout(function () {
                            _this.router.navigate(['/']);
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message, "Error!");
                    }
                }, function (error) {
                    _this.toastr.error("Some Error Occurred", "Error!");
                });
            }
            else {
                _this.toastr.error("Password Mismatch", "Error!");
            }
        };
        this.matchPassword = function () {
            if (_this.password === _this.confirmPassword) {
                return true;
            }
            else {
                return false;
            }
        }; //end matchPassword
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/user/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/user/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark\" style=\"background-color: #67aee0;\">\n\n  <a class=\"navbar-brand\" href=\"/\">Meeting Planner Application</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" style=\"cursor: pointer\" (click)=\"goToSignIn()\">SignIn</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\" style=\"background-color: #c9ced1;\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Sign Up</h2>\n\n    <br>\n    <div class=\"btn-group btn-group-toggle\" role=\"group\" data-toggle=\"buttons\" aria-label=\"Basic example\">\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"checkAdmin(false)\">Regular</button>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"checkAdmin(true)\">Admin</button>\n    </div>\n    <br>\n    <br>\n\n    <span>FirstName: </span>\n\n    <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n\n    <input type=\"text\" #first=\"ngModel\" pattern=\"^[A-Z][A-za-z ]+$\" minlength=\"2\" id=\"inputFirstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\" required autofocus>\n\n    <br>\n    <div [hidden]=\"first.pristine || first.valid\" class=\"alert alert-danger\">\n      <div *ngIf=\"first.errors?.pattern\">\n        Warning : Please tart with Capital and contain only letters !\n            <div *ngIf=\"first.errors?.minlength\">\n              Warning : Minimum 2 letters required!\n            </div>\n      </div>\n      <div *ngIf=\"first.errors?.required\">\n        Warning : First Name is required!\n      </div>\n\n    </div>\n\n\n\n    <span>LastName: </span>\n\n    <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n\n    <input type=\"text\" #last=\"ngModel\" pattern=\"^[A-Z][A-za-z ]+$\" minlength=\"2\" id=\"inputLastName\" class=\"form-control\" [(ngModel)]=\"lastName\" placeholder=\"LastName\" required>\n\n    <br>\n\n    <div [hidden]=\"last.pristine || last.valid\" class=\"alert alert-danger\">\n      <div *ngIf=\"last.errors?.pattern\">\n        Warning : Please tart with Capital and contain only letters !\n        <div *ngIf=\"last.errors?.minlength\">\n          Warning : Minimum 2 letters required!\n        </div>\n      </div>\n      <div *ngIf=\"last.errors?.required\">\n        Warning : Last Name is required!\n      </div>\n\n    </div>\n\n\n\n    <span class=\"sub-heading\">UserName: </span>\n  \n    <label for=\"inputUserName\" class=\"sr-only\">UserName</label>\n\n    <input type=\"text\" #user=\"ngModel\" pattern=\"^[A-Z][A-za-z0-9- ]+$\" minlength=\"2\" id=\"inputUserName\" name=\"userName\" [(ngModel)]=\"userName\"\n      class=\"form-control\" placeholder=\"UserName\" required>\n    <br/>\n\n    <div [hidden]=\"user.pristine || user.valid\" class=\"alert alert-danger\">\n      <div *ngIf=\"user.errors?.pattern\">\n        Warning : User name should only start with Capital letter and contain only letters & digits !\n        <div *ngIf=\"user.errors?.minlength\">\n          Warning : User Name should contain minimum 2 letters!\n        </div>\n      </div>\n      <div *ngIf=\"user.errors?.required\">\n        Warning : User Name is required!\n      </div>\n\n\n    </div>\n\n    <div *ngIf=\"isAdmin && userName\">\n\n      <div *ngIf=\"!validateUserName()\" class=\"alert alert-danger\">\n\n        Warning : Invalid User Name as admin, Please ends with \"-admin\"!\n\n      </div>\n\n\n    </div>\n\n\n    <span>Email: </span>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" #emailId=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required>\n\n    <br>\n    <div [hidden]=\"emailId.valid || emailId.pristine\" class=\"alert alert-danger\">\n      <div *ngIf=\"emailId.errors?.pattern\">\n       Warning : Email is invalid!\n\n      </div>\n      <div *ngIf=\"emailId.errors?.required\">\n       Warning : Email is required!\n      </div>\n    </div>\n\n    <span>Password: </span>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" #pass=\"ngModel\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n\n    <br>\n    <div [hidden]=\"pass.valid || pass.pristine\" class=\"alert alert-danger\">\n      <div *ngIf=\"pass.errors?.pattern\">\n       Warning : Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters!\n      </div>\n      <div *ngIf=\"pass.errors?.required\">\n       Warning : Password is required!\n      </div>\n    </div>\n\n\n    <span class=\"sub-heading\">Confirm Password: </span>\n\n    <label for=\"inputConPassword\" class=\"sr-only\">Confirm Password</label>\n\n    <input type=\"password\" #conPass=\"ngModel\"  id=\"inputConPassword\" class=\"form-control\" name=\"conPass\" [(ngModel)]=\"confirmPassword\"\n      placeholder=\"Confirm Password\" required>\n\n    <br>\n   \n    <div [hidden]=\"conPass.pristine || password==confirmPassword\" class=\"alert alert-danger\">\n       <div *ngIf=\"password!=confirmPassword\">\n          Warning : Password and Confirm Password does not match!\n       </div>\n      <div *ngIf=\"conPass.errors?.required\">\n          Warning: Confirm Password is required!\n      </div>\n    </div>\n\n    <span class=\"sub-heading\">Country: </span>\n\n    <label for=\"inputCountry\" class=\"sr-only\">Country</label>\n    \n    <select [(ngModel)]=\"countryName\" #Country=\"ngModel\"  name=\"countryName\" class=\"form-control\" \n    id=\"inputCountry\" (change)=\"onChange()\" required>\n       <option value=\"\" >Select</option>\n      <option *ngFor=\"let country of finalCountryList\" [value]=\"country.key\">{{country.value}}</option>\n    </select>\n      <br>\n      <div [hidden]=\"Country.valid || Country.pristine  \" class=\"alert alert-danger\">\n      ** Country Name is required \n      </div>\n    \n\n    <span class=\"sub-heading\">Mobile: </span>\n\n    <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n    <div class=\"input-group\">\n        <div class=\"input-group-text\">+{{code}}</div>\n        <input type=\"number\" #mobileNum=\"ngModel\" pattern=\"^\\d{10}$\" id=\"inputMobile\" class=\"form-control\" name=\"mobile\" [(ngModel)]=\"mobileNumber\"\n        placeholder=\"Mobile\" required>\n      </div>\n \n\n    <br>\n    <div [hidden]=\"mobileNum.valid || mobileNum.pristine\" class=\"alert alert-danger\">\n      <div *ngIf=\"mobileNum.errors?.pattern\">\n        Mobile Number should only start contain only 10 digits!\n\n      </div>\n      <div *ngIf=\"mobileNum.errors?.required\">\n        Mobile Number is required!\n      </div>\n    </div>\n\n\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sort_countries_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sort-countries.pipe */ "./src/app/sort-countries.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for importing the service
//import for service

//import for toastr

//import for Routing

//import for spinner

//for country sorting purpose

var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, _route, router, toastr, sortCountries, spinner) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.sortCountries = sortCountries;
        this.spinner = spinner;
        this.isAdmin = false;
        this.countryName = "";
        this.finalCountryList = [];
        this.codeList = [];
        this.onChange = function () {
            _this.appService.getCountryCode().subscribe(function (Response) {
                _this.codeList = Response;
                _this.code = _this.codeList[_this.countryName];
            });
        }; //end
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getCountryList().subscribe(function (Response) {
            _this.countryList = Response;
            for (var prop in _this.countryList) {
                _this.finalCountryList.push({
                    'key': prop,
                    'value': _this.countryList[prop]
                });
            }
            _this.finalCountryList = _this.sortCountries.transform(_this.finalCountryList);
        });
    };
    SignupComponent.prototype.goToSignIn = function () {
        this.router.navigate(['/']);
    }; //end of goToSign function
    SignupComponent.prototype.signupFunction = function () {
        var _this = this;
        if (!this.firstName) {
            this.toastr.warning("First Name is required", "Warning!");
        }
        else if (!this.lastName) {
            this.toastr.warning("Last Name is required", "Warning!");
        }
        else if (!this.userName) {
            this.toastr.warning("User Name is required", "Warning!");
        }
        else if (!this.mobileNumber) {
            this.toastr.warning("Mobile Number is required", "Warning!");
        }
        else if (!this.countryName) {
            this.toastr.warning("Country is required", "Warning!");
        }
        else if (!this.email) {
            this.toastr.warning("Email is required", "Warning!");
        }
        else if (!this.password) {
            this.toastr.warning("Password is required", "Warning!");
        }
        else {
            this.spinner.show();
            var data = {
                firstName: this.firstName,
                lastName: this.lastName,
                mobileNumber: "+" + this.code + "-" + this.mobileNumber,
                email: this.email,
                password: this.password,
                userName: this.userName,
                country: this.countryName,
                isAdmin: this.isAdmin
            };
            this.appService.signup(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.spinner.hide();
                    _this.toastr.success("Signed Up", "SuccesFull, Please verify your email");
                    setTimeout(function () {
                        _this.goToSignIn();
                    }, 1000); //redirecting to signIn page
                }
                else {
                    _this.spinner.hide();
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                _this.spinner.hide();
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(['/server-error']);
            }); //end calling signUpFunction
        }
    }; //end signUp function
    SignupComponent.prototype.checkAdmin = function (flag) {
        this.isAdmin = flag;
    }; //end checkAdmin
    SignupComponent.prototype.validateUserName = function () {
        if (this.userName.indexOf("admin") != -1) {
            return true;
        }
        else {
            return false;
        }
    }; //end validateUserName
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _sort_countries_pipe__WEBPACK_IMPORTED_MODULE_5__["SortCountriesPipe"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-verify/email-verify.component */ "./src/app/user/email-verify/email-verify.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//for router module and form module







var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
                    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"] },
                    { path: 'email-verify/:userId', component: _email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_6__["EmailVerifyComponent"] },
                    { path: 'reset-password/:userId', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"] }
                ])
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"], _email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_6__["EmailVerifyComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\ProjectMEET_PLANNER\meeting-planner-frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
