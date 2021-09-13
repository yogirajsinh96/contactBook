import { Component, HostListener, OnInit } from '@angular/core';
import { AddContactService } from '../../add-contact.service';
import { updateContact, updateContact2 } from '../../contact.interface';
import { ContactlistComponent } from '../contactlist.component';
import { ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css'],
})
export class DisplayContactComponent implements OnInit {
  // store:any;
  obj1: updateContact2[] = [];
  constructor(
    public obj: AddContactService,
    private contactObj: ContactlistComponent,
    private http: HttpClient
  ) {}

  // ready=false;

  ngOnInit() {
    this.obj.getContact();
    // alert(this.obj.obj2.length)
    // this.obj1=this.obj.obj2;
    // setTimeout(()=>{console.log(this.obj.obj2.length)},1000);
  }
  // ngAfterViewInit(){ this.ready = true; }

  callme() {
    // this.refresh.detectChanges();4
    // this.obj.getContact().subscribe(res=>{
    //   this.obj1=res;
    //   console.log(res)
    // });
  }

  editMode(id: string) {
    if (this.contactObj.temp == 1) {
      // alert(this.obj1[parseInt(id)].name);
      let name = '';
      for (let i = 0; i < this.obj.obj2.length; i++) {
        if (id == this.obj.obj2[i].contactId) {
          name = this.obj.obj2[i].contatcName;
        }
      }
      this.contactObj.temp = 0;
      this.contactObj.style = 'background-color: white;';
      this.contactObj.popupStyle = 'display:block;';
      this.contactObj.name = name;
      this.contactObj.id = id;
    }
  }

  deleteContact(id: string) {
    // alert(id)
    this.http
      .delete('http://localhost:3000/contact-details/' + id)
      .subscribe((data) => {
        // alert(data);
        console.log(data);
        this.obj.getContact();
      });
  }

  pageStart: number = 0;
  pageEnd: number = 30;
  pageHeight: number = 10;
  pageBuffer: number = 30;

  @HostListener('window:scroll', ['$event'])
  onScroll($event: any) {
    // alert()
    const scrollTop = $event.target.scrollTop;
    const scrollHeight = $event.target.scrollHeight;
    const offsetHeight = $event.target.offsetHeight;
    const scrollPosition = scrollTop + offsetHeight;
    const scrollTreshold = scrollHeight - this.pageHeight - 500;
    if (scrollPosition > scrollTreshold) {
      this.pageEnd += this.pageBuffer;
    }
  }

  trackByFn(index: any, item: any) {
    return item.id;
  }

  searchbx = '';

  search(searchBox: HTMLInputElement) {
    this.obj1 = [];
    this.searchbx = searchBox.value;
    // let temp=0;
    if (searchBox.value != '') {
      // search.style.display="flex";
      // list.style.display="none";
      // console.log(searchBox.value)
      // for(let i=0;i<this.obj.obj2.length;i++){
      //   if(this.obj.obj2[i].contatcName.includes(searchBox.value)){
      //     // this.obj1[temp]=this.obj.obj2[i];
      //     this.obj1.push(this.obj.obj2[i]);
      //     // console.log(this.obj1[temp]);
      //     // temp++;
      //   }
      // }
    } else {
      // list.style.display="flex";
      // search.style.display="none";
    }
  }
}
