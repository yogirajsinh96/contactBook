import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  email = '';
  password = '';

  btnDissable = false;

  chk() {
    this.btnDissable = true;

    this.http
      .get<loginDetails>(
        environment.dbUrl +
          '/auth/login?email=' +
          this.email +
          '&password=' +
          this.password
      )
      .subscribe((data) => {
        if (data) {
          console.log(data);
          localStorage.setItem('userId', data.userid.toString());
          localStorage.setItem('userName', data.username);
          this.router.navigate(['dash']);
        } else {
          alert('wrong info');
        }
        this.btnDissable = false;
      });
  }
}

interface loginDetails {
  userEmail: string;
  userid: number;
  username: string;
  userPassword: string;
}
