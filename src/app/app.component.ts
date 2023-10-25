import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilitiesService } from './utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UtilitiesService]
})
export class AppComponent {
  title = 'user_account_design';
  ab: any;

  constructor(private router: Router, public utility: UtilitiesService) {
    this.ab = this.router.url;
    this.utility.fetchData();
    //this.utility.okLogin = false;
  }

  // ngDoCheck() {
  //   this.utility.displayNum;
  //   console.log(this.utility.displayNum + '1');
  // }

  loginPageDisplay() {
    this.utility.displayNum = true;
    this.router.navigate(['login']);
  }

  signUpPageDisplay() {
    this.utility.displayNum = true;
    this.router.navigate(['signup']);
  }

  profilePageDisplay() {
    this.utility.displayNum = true;
    this.router.navigate(['profile']);
  }

}
