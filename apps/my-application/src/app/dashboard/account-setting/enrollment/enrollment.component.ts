import { Component, OnInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { EnrollmentService } from '../../enrollment.service';
import { enrollment } from '../../interface/enrollment';

import { FormGroup   } from '@ng-stack/forms';


@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  constructor(private enrollService:EnrollmentService) { }

  ngOnInit(): void {
    this.listEnrollment=this.enrollService.getEnrollment();
  }

  listEnrollment:enrollment[]={} as enrollment[];

  
   form = new FormGroup<form>({});
   model:enrollment = { name: '',loginId:'',password:'',device:'',status:'',deviceName:'' };
     fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      className:"demo",
      templateOptions: {
        label: 'QR-code Name :',
        required: true,
      },
      validation:{
        messages:{
          required:"required"
        }
      }
    },  
    {
      key: 'loginId',
      type: 'input',
      templateOptions: {
        label: 'Login ID :',
        required: true,
      },
      validation:{
        messages:{
          required:"required"
        }
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type:'password',
        label: 'Password :',
        required: true,
        minLength:5
      },
      validation:{
        messages:{
          required:"required",
          minlength:"password must be more then 5 char"
        }
      }
    },
    {
      key: 'device',
      type: 'input',
      templateOptions: {
        label: 'Active Devices :',
        required: true,
      },
      validation:{
        messages:{
          required:"required"
        }
      }
    },
    {
      key: 'status',
      type: 'input',
      templateOptions: {
        label: 'QR Code status :',
        required: true,
      },
      validation:{
        messages:{
          required:"required"
        }
      }
    },
    {
      key: 'deviceName',
      type: 'input',
      templateOptions: {
        label: 'Device Name Type :',
        required: true,
      },
      validation:{
        messages:{
          required:"required",
        }
      }
    },
  ];

  obj:enrollment={} as enrollment;

  validation(){
    // alert()/
    
    // alert(Object.keys(this.model)+" "+Object.values(this.model))
    for(let i=0;i<this.fields.length;i++){
      this.fields[i].validation!.show=true;
    }

    if(this.form.valid){
      this.obj={ ...this.model};
      this.enrollService.addEnrollment(this.obj)
      
      // this.model = { name: '',loginId:'',password:'',device:'',status:'',deviceName:'' };
      
      this.form.reset();
      
      this.form.get('name')!.setErrors(null);
      this.form.get('loginId')!.setErrors(null);
      this.form.get('password')!.setErrors(null);
      this.form.get('device')!.setErrors(null);
      this.form.get('status')!.setErrors(null);
      this.form.get('deviceName')!.setErrors(null);
    }
    else{
      alert("invalid");
    }
  }
}


interface form{
  name?:string;
  loginId?:string;
  password?:string;
  device?:string;
  status?:string;
  deviceName?:string;
}