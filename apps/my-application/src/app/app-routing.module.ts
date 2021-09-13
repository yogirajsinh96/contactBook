import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AccountSettingComponent } from './dashboard/account-setting/account-setting.component';
import { AddAnnouncementsComponent } from './dashboard/add-announcements/add-announcements.component';
import { AddContactComponent } from './dashboard/add-contact/add-contact.component';
import { AnnouncementsComponent } from './dashboard/announcements/announcements.component';
import { ContactlistComponent } from './dashboard/contactlist/contactlist.component';
import { DisplayContactComponent } from './dashboard/contactlist/display-contact/display-contact.component';
import { ImportContactComponent } from './dashboard/contactlist/import-contact/import-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
// import { ImportContactComponent } from './dashboard/contactlist/import-contact/import-contact.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: "dash", component: DashboardComponent, children: [
      {
        path: '', component: ContactlistComponent, children: [{
          path: '', component: DisplayContactComponent
        },
        {path:'', outlet:'import' ,component:ImportContactComponent}
      ]
      },

      { path: "add", component: AddContactComponent },
      { path: "add/:id", component: AddContactComponent },

      {
        path: "announcements", children: [
          { path: "", component: AnnouncementsComponent }, {
            path: 'add', component: AddAnnouncementsComponent
          }]
      },
      {
        path:'setting' ,component:AccountSettingComponent
      }
    ]
  },
  // {
  //   path:'dash' , loadChildren:()=>import('./dashboard/dashboard.module').then(x=>x.DashboardModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
