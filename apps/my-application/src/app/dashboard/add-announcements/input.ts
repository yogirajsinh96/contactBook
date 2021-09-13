import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { AnnouncementsService } from '../announcements.service';
import { announcements } from '../interface/announcements';
import { AddAnnouncementsComponent } from './add-announcements.component';

@Component({
 selector: 'formly-field-input',
 template: `
 <div class="container" > 
                  <div class="txt">
                Title:
            </div>
            <div class="inputs">
                <input type="input"  [formControl]="$any(formControl.get('input1'))" [formlyAttributes]="field" class="input" />
                
                <div><mat-icon >info</mat-icon></div>
            </div>

            <div class="txt left-side">
                Expiry Date :
            </div>
            <div class="inputs">
                <input type="date" [formControl]="$any(formControl.get('date'))" [formlyAttributes]="field"  class="input other-input" />
            </div>
            
        </div>
        
        <div class="container">
            
            <div class="txt">
                Description:
            </div>
            <div class="inputs">
                <input type="input"  [formControl]="$any(formControl.get('input2'))" [formlyAttributes]="field" class="input" />
                
                <div><mat-icon >info</mat-icon></div>
            </div>
            
            <div class="txt left-side">
                Expiry Date :
            </div>
            <div class="inputs">
                <button class="input other-input btn" >ADD</button>
            </div>
            
        </div>
        
        
        <div class="container other-container">
            
            <div class="txt1">
                Details:
            </div>
            <div class="outer-div">
                <div class="inner-div">
                    <div class="inputs-other">
                        <input type="text" type="input"  [formControl]="$any(formControl.get('input3'))" class="input-details" />
                    </div>
                    <div class="inputs-other desc">
                        <textarea class="input-details text-area" style="resize:none" type="textarea" [formlyAttributes]="field" [formControl]="$any(formControl.get('input4'))"  ></textarea>
                    </div>
                </div>
            </div>            
        </div>
        <div class="container container-toggel">
            <div class="toggel">
                
                 Pin announceme: <mat-slide-toggle ></mat-slide-toggle>
                </div>
                
            </div>
            
        

            <!-- {{model|json}} -->
 `,
 
  styleUrls: ['./add-announcements.component.css']
 
})
export class InputCustom extends FieldType {



}