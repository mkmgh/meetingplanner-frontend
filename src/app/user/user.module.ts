import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//for router module and form module
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'signup',component:SignupComponent},
      {path:'forgot-password', component:ForgotPasswordComponent},
      {path:'email-verify/:userId' ,component: EmailVerifyComponent},
      {path:'reset-password/:userId',component:ResetPasswordComponent}
    ])
  ],
  declarations: [LoginComponent, SignupComponent, EmailVerifyComponent, ForgotPasswordComponent, ResetPasswordComponent]
})
export class UserModule { }
