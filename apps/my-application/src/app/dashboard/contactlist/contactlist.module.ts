import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactlistRoutingModule } from './contactlist-routing.module';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { MaterialModule } from './../../material/material.module';
import { ImportContactService } from '../import-contact.service';
import { ImportContactComponent } from './import-contact/import-contact.component';
import { DashboardModule } from '../dashboard.module';
import { SharedModule } from './../../shared/shared.module';
import { AnnouncementsComponent } from '../announcements/announcements.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ContactlistComponent } from './contactlist.component';
import { SearchPipe } from './../../search.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { NgpSortModule } from 'ngp-sort-pipe';

@NgModule({
  declarations: [
    SearchPipe,
    DisplayContactComponent,
    ImportContactComponent,
    // AnnouncementsComponent
  ],
  imports: [
    CommonModule,
    ContactlistRoutingModule,
    MaterialModule,
    // SharedModule
    FormsModule,
    BrowserModule,
    OrderModule,
    NgpSortModule,
  ],
  providers: [ImportContactComponent, ContactlistComponent],
})
export class ContactlistModule {}
