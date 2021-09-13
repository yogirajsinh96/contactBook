import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-book-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class AdminDashComponent implements OnInit {
  constructor(public http: HttpClient) {}

  users = 0;
  countacts = 0;

  ngOnInit(): void {
    this.http
      .get<getCount>('http://localhost:3000/contact-details/count')
      .subscribe((data) => {
        this.countacts = data.count;
      });

    this.http
      .get<getCount>('http://localhost:3000/user/count')
      .subscribe((data) => {
        this.users = data.count;
      });
  }
}
interface getCount {
  count: number;
}
