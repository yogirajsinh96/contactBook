import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountSettingRoutingModule } from './account-setting-routing.module';
import { MaterialModule } from './../../material/material.module';
import { VisibilityComponent } from './visibility/visibility.component';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountSettingRoutingModule,
    MaterialModule,
    FormlyModule.forChild(),
  ],
})
export class AccountSettingModule {}
