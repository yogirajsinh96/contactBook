import { Component, OnInit } from '@angular/core';
import { AddContactService } from '../add-contact.service';
import { updateContact } from '../contact.interface';
// import { ContactlistComponent } from '../contactlist/contactlist.component';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit {
  constructor(public displayData: AddContactService) {}

  obj: updateContact[] = new Array();

  ngOnInit(): void {
    // this.obj=this.displayData.getContact();
  }

  ngDoCheck() {
    // this.obj=this.displayData.getContact();
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
}
