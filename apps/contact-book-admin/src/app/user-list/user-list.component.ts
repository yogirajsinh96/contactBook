import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-book-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private http: HttpClient) {}

  userList: user[] = [];

  ngOnInit(): void {
    this.call();
  }

  async call() {
    await this.http
      .get<user[]>('http://localhost:3000/user/get')
      .subscribe((data) => {
        console.log(data);
        this.userList = data;
      });
  }

  display = 'none';
  delete(id: string) {
    this.http.delete('http://localhost:3000/user/' + id).subscribe((data) => {
      console.log(data);
      this.http
        .delete('http://localhost:3000/contact-details/user/' + id)
        .subscribe((data) => {
          console.log(data);
          this.call();
        });
    });
  }

  id = '';
  namets = '';
  emailts = '';
  conuter = 0;

  edit(a: string, b: string, id: string) {
    if (this.conuter == 0) {
      this.display = 'block';
      this.conuter = 1;
      this.namets = a;
      this.emailts = b;
      this.id = id;
    }
  }
  close() {
    if (this.conuter == 1) {
      this.display = 'none';
      this.conuter = 0;
    }
  }

  update(name: HTMLInputElement, email: HTMLInputElement) {
    this.http
      .patch('http://localhost:3000/user/' + this.id, {
        name: name.value,
        email: email.value,
      })
      .subscribe((data) => {
        this.call();
        this.close();
      });
  }
  displayedColumns = [
    'userId',
    'userName',
    'userEmail',
    'button',
    'deletebtn',
    'editbtn',
  ];
}
interface user {
  userId: string;
  userName: string;
  userEmail: string;
}
