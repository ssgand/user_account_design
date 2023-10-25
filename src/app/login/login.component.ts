import { Component, Input } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userEmail: string = '';
  userPwd: string = '';

  constructor(private utility: UtilitiesService) {
    this.utility.okLogin = false;
  }

  ngOnDestroy() {
    this.utility.displayNum = false;
  }

  onLogin() {
    this.utility.fetchedData.filter((dta: any) => {
      if(dta.email == this.userEmail && dta.password == this.userPwd) {
        this.utility.okLogin = true;
        this.utility.userData = dta;
      }});
    if (this.utility.okLogin) {
      this.utility.displayNum = false;
    }
    console.log(this.utility.okLogin)
  }

  onCancel() {
    this.utility.displayNum = false;
  }

}
