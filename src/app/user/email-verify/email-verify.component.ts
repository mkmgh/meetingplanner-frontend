import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { AppService } from './../../app.service';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css']
})
export class EmailVerifyComponent implements OnInit {

  public data :any;
  public success:number;
  public failure:number;

  constructor(
    private route: ActivatedRoute, private router: Router,public appService: AppService
  ) { }

  ngOnInit() {
    this.data = this.route.snapshot.paramMap.get('userId');
    this.appService.verifyEmail(this.data).subscribe(
      Response => {
        if (Response.status === 200) {
          this.success=1;
        }
        else{
          this.failure=1;
        }
        },
      error => {
       
       
    });
  }

}
