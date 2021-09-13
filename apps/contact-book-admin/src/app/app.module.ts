import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
// import { MaterialModule } from '../../../my-application/src/app/material/material.module';
import { AdminDashComponent } from './dash/dash.component';
import { UserListComponent } from './user-list/user-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashComponent,
    UserListComponent,
    ContactListComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    AppRoutingModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
