import { Component, OnInit } from '@angular/core';

//for importing the service
//import for service
import { AppService } from '../../app.service';
//import for toastr
import { ToastrService } from 'ngx-toastr';
//import for Routing
import { ActivatedRoute, Router } from '@angular/router';
//import for spinner
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

//for country sorting purpose
import { SortCountriesPipe } from '../../sort-countries.pipe';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  public mobileNumber: string;
  public email: string;
  public password: string;

  public isAdmin: boolean = false;
  public userName: string;
  
  public countryName: string ="";
  public countryList:any;
  public finalCountryList:any=[];
  public codeList:any=[];
  public code:string;

  


  constructor(
    public appService: AppService,
    public _route: ActivatedRoute,
    public router: Router,
    private toastr: ToastrService,
    public sortCountries : SortCountriesPipe,
    private spinner: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    this.appService.getCountryList().subscribe(
      Response=>{
         this.countryList=Response;
         for (var prop in this.countryList) {
          this.finalCountryList.push({
            'key': prop,
            'value': this.countryList[prop]
        });

         }
        this.finalCountryList=this.sortCountries.transform(this.finalCountryList);
       
      }
    )
  }

  public goToSignIn(): any {
    this.router.navigate(['/']);
  }//end of goToSign function



  public signupFunction(): any {

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
      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        mobileNumber: `+${this.code}-${this.mobileNumber}`,
        email: this.email,
        password: this.password,
        userName: this.userName,
        country: this.countryName,
        isAdmin: this.isAdmin
      }
      this.appService.signup(data)
        .subscribe((apiResponse) => {

          if (apiResponse.status == 200) {
            this.spinner.hide();
            this.toastr.success("Signed Up", "SuccesFull, Please verify your email");
            setTimeout(() => {
              this.goToSignIn();
            }, 1000);//redirecting to signIn page

          }
          else {
            this.spinner.hide();
            this.toastr.error(apiResponse.message, "Error!");
          }
        },
          (error) => {
            this.spinner.hide();
            this.toastr.error("Some Error Occurred", "Error!");
            this.router.navigate(['/server-error']);
          });//end calling signUpFunction
    }
  }//end signUp function

  public onChange=()=>{  
    this.appService.getCountryCode().subscribe(
      Response=>{
        this.codeList=Response;
       
        this.code=this.codeList[this.countryName];
  
      }
    )
  }//end
  
  public checkAdmin(flag:boolean){

    this.isAdmin = flag;

  }//end checkAdmin
  public validateUserName(){

    if(this.userName.indexOf("admin") != -1){
      return true;
    }else{
      return false;
    }

  }//end validateUserName

}
