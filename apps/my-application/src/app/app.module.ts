import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { InputCustom } from './dashboard/add-announcements/input';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SearchPipe } from './search.pipe';
// import { InportContactComponent } from './dahsboard/contactlist/inport-contact/inport-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    // SearchPipe,
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true },
      types: [
        {
          name: 'newinput',
          component: InputCustom,
          defaultOptions: {
            fieldGroup: [
              { key: 'input1' },
              { key: 'input2' },
              { key: 'input3' },
              { key: 'input4' },
              { key: 'date' },
            ],
          },
        },
      ],
    }),
    ReactiveFormsModule,
    FormlyMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
