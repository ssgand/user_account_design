import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface UserData {
  imageUrl: string;
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  age: number | null,
  birthDate: string,
  maritalStatus: string,
  nationality: string,
  password: string,
  password1: string,
}

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  displayNum: boolean = false;
  userData: UserData = {
    imageUrl: '../assets/user.png',
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

  fetchedData: any;
  okLogin: boolean = false;


  constructor(private http: HttpClient) { }

  fetchData() {
    const header = new HttpHeaders({
      contentType: 'application/JSON',
      });
      this.http.get('https://user-account-design-proj-7df8e-default-rtdb.firebaseio.com/users.json', {headers: header})
        .subscribe(dta => {
          this.fetchedData = Object.values(dta);
          console.log(this.fetchedData);
        });
  }
}
