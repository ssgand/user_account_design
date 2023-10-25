import { Component } from '@angular/core';
import { UtilitiesService } from '../utilities.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  //url: string = '../../assets/user.png';

  constructor(public utility: UtilitiesService, private http: HttpClient) {}

  ngOnDestroy() {
    this.utility.displayNum = false;
  }

  ngDoCheck() {}

  onSelectFile(e: any) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event: any) => {
      this.utility.userData.imageUrl = event.target.result;
    }
  }

  onSubmit() {
    this.http.post('https://user-account-design-proj-7df8e-default-rtdb.firebaseio.com/users.json', this.utility.userData)
      .subscribe(dta => console.log(dta));
    this.utility.displayNum = false;
  }

  onCancel() {
    this.utility.displayNum = false;
  }

}
