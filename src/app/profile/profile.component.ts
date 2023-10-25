import { Component } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userModel: any;
  

  constructor(public utility: UtilitiesService) {
    // if (this.utility.okLogin) {
    //   this.utility.userData = ;
    // };
  }

  onLogout() {
    this.utility.userData = {
      imageUrl: '',
      email: '',
      firstName: '',
      lastName: '',
      gender: '',
      age: null,
      birthDate: '',
      maritalStatus: '',
      nationality: '',
      password: '',
      password1: ''
    }
    this.utility.displayNum = false;
  }

  ngOnDestroy() {
    this.utility.displayNum = false;
  }

  onCancel() {
    this.utility.displayNum = false;
  }

}
