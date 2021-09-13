import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { DisplayContactComponent } from './contactlist/display-contact/display-contact.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  // {
  // {path:'' , component:DashboardComponent ,children:[{
  //   path:'' ,component:ContactlistComponent, children: [{
  //         path: '', component: DisplayContactComponent
  //       }]
  // }]}
  //     }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
  constructor(){
    // alert('ehbfvn')
  }
 }
