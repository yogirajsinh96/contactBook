import { Component, OnInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AnnouncementsService } from '../announcements.service';
import { announcements } from '../interface/announcements';
import { FormGroup } from '@ng-stack/forms';

@Component({
  selector: 'app-add-announcements',
  templateUrl: './add-announcements.component.html',
  styleUrls: ['./add-announcements.component.css']
})
export class AddAnnouncementsComponent implements OnInit {

  constructor(private classObj:AnnouncementsService) { }

  ngOnInit(): void {
  }

   form = new FormGroup<form>({});
   model = { form:{input1:'' ,input2:'',input3:'',input4:'' ,date:""}  };
     fields: FormlyFieldConfig[] = [
      {
        key:"form",
        type:'newinput',
      }
  ];

  
    obj:announcements={} as announcements;

    // classObj=new AnnouncementsService();

    getValue(){
        if(this.model.form.input1 !=="" ||this.model.form.input2 !=="" || this.model.form.input3 !=="" ||this.model.form.date !=null){
          this.obj.date=  this.model.form.date;
          this.obj.description=  this.model.form.input2;
          this.obj.title=  this.model.form.input1;
          this.obj.details=  this.model.form.input3;
          this.obj.teaxtarea=  this.model.form.input4;
          this.obj.id=this.classObj.id.toString();
          this.classObj.id=this.classObj.id++;

          // alert(this.form.get('form')!.value?.input1)
          this.form.reset();
          this.classObj.setAnnoucement(this.obj)
        }
    }
}

interface form{
  form?:inputs;
}

interface inputs{
  input1?:string;
  input2?:string;
  input3?:string;
  input4?:string; 
  date?:string;
}