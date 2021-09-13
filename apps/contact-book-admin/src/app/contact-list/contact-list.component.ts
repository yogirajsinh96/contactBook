import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchPipe } from '../search.pipe';
@Component({
  selector: 'contact-book-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  constructor(private http: HttpClient, private httpparam: ActivatedRoute) {}

  userList: user[] = [];
  userList2: user[] = [];
  Name = '';
  Qualifiction = '';
  Email = '';
  Mobile = '';
  Tag = '';
  Id = '';

  ngOnInit(): void {
    this.call();
  }

  async call() {
    await this.http
      .get<user[]>(
        'http://localhost:3000/contact-details/get?id=' +
          this.httpparam.snapshot.params['id']
      )
      .subscribe((data) => {
        console.log(data);
        this.userList = data.sort((a, b) =>
          a.contatcName.localeCompare(b.contatcName, 'en', {
            caseFirst: 'upper',
          })
        );
        this.userList2 = this.userList;
      });
  }
  showpopup(
    name: string,
    qualification: string,
    email: string,
    mobile: string,
    tag: string,
    id: string
  ) {
    this.display = 'block';
    this.Name = name;
    this.Qualifiction = qualification;
    this.Email = email;
    this.Mobile = mobile;
    this.Tag = tag;
    this.Id = id;
  }

  display = 'none';
  async delete(id: string) {
    this.http
      .delete('http://localhost:3000/contact-details/' + id)
      .subscribe((data) => {
        console.log(data);
        this.call();
      });
  }
  close() {
    this.display = 'none';
  }

  update(
    name: string,
    qualification: string,
    email: string,
    mobile: string,
    tag: string
  ) {
    this.http
      .patch('http://localhost:3000/contact-details/' + this.Id, {
        contatcName: name,
        contactQualification: qualification,
        email: email,
        contactMobile: mobile,
        tag: tag,
      })
      .subscribe((data) => {
        this.call();
        this.close();
        // console.log(data);
      });
  }

  search(val: string) {
    this.userList2 = this.userList.filter(function (search: any) {
      return (
        search.contatcName.toLowerCase().indexOf(val.toString().toLowerCase()) >
        -1
      );
    });
  }
  displayedColumns = [
    'contactId',
    'userId',
    'contatcName',
    'contactQualification',
    'contactMobile',
    'email',
    'tag',
    'btn',
    'updatebtn',
  ];
}
interface user {
  contactId: number;
  userId: number;
  contatcName: string;
  contactQualification: string;
  contactMobile: string;
  email: string;
  tag: string;
}
