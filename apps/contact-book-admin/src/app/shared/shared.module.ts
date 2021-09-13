import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { NgStackFormsModule } from '@ng-stack/forms';
import { HttpClientModule } from '@angular/common/http';
// import { SearchPipe } from '../search.pipe';

@NgModule({
  declarations: [
    // SearchPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgStackFormsModule,
    HttpClientModule,

    // FormlyModule.forRoot({ extras: { lazyRender: true } }),
  ],
  exports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgStackFormsModule,
    HttpClientModule,
  ],
})
export class SharedModule {}
