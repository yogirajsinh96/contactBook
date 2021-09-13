import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AddAnnouncementsComponent } from './add-announcements/add-announcements.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { AccountSettingModule } from './account-setting/account-setting.module';
import { EnrollmentComponent } from './account-setting/enrollment/enrollment.component';
import { CustomFieldComponent } from './account-setting/custom-field/custom-field.component';
import { TagManagementComponent } from './account-setting/tag-management/tag-management.component';
import { VisibilityComponent } from './account-setting/visibility/visibility.component';
import { AddContactService } from './add-contact.service';


import {  ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';
import { FormlyModule } from '@ngx-formly/core';
import { EnrollmentService } from './enrollment.service';
import {InputCustom } from './add-announcements/input';
import { FormlyMaterialModule } from '@ngx-formly/material';
// import { ImportContactComponent } from './contactlist/import-contact/import-contact.component';
import { ImportContactService } from './import-contact.service';
import { TableViewComponent } from './table-view/table-view.component';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    ContactlistComponent,
    AddContactComponent,
    AnnouncementsComponent,
    AddAnnouncementsComponent,
    AccountSettingComponent,
    EnrollmentComponent,
    CustomFieldComponent,
    TagManagementComponent,
    VisibilityComponent,
    InputCustom,
    TableViewComponent,
    // ImportContactComponent
  ],
  imports: [
    OrderModule,
    FormsModule,
    MaterialModule,
    DashboardRoutingModule,
    SharedModule,
    AppModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forChild(),
    // DashboardRoutingModule
  ],
  providers:[
    AddContactService,
    EnrollmentService,
    ImportContactService,
  ],
  exports:[
    // ImportContactComponent
    AnnouncementsComponent
  ]
})
export class DashboardModule { }
