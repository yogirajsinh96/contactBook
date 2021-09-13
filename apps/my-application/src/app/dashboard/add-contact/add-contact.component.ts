import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddContactService } from '../add-contact.service';
import {updateContact, updateContact2} from '../contact.interface';

// import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { FormGroup,FormBuilder, Validators } from '@ng-stack/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})

export class AddContactComponent implements OnInit {

  formgrp!:FormGroup<inputs>;
  constructor(private router:Router,private addService:AddContactService,private route:ActivatedRoute,public fb:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {

    this.formgrp=this.fb.group<inputs>({
      name:["",Validators.required],
      qualification:['',Validators.required],
      mobile:['',[Validators.required,Validators.minLength(10)]],
      email:['',[Validators.required,Validators.email]],
    });

    if(this.route.snapshot.params['id']){
      this.id=this.route.snapshot.params['id'];
      this.store=this.addService.obj2;    
      for(let i=0;i<this.store.length;i++){
        // alert(this.store[i].contactId+" "+this.id)
        if(this.store[i].contactId==this.id){
        // alert(this.store[i].contatcName)
          this.name=this.store[i].contatcName;
          this.qualification=this.store[i].contactQualification;
          this.mobile=this.store[i].contactMobile;
          this.email=this.store[i].email;
        }
      }

    }
  }

  id:string='';

  store:any;

  name:string="";
  qualification:string="";
  mobile:string="";
  email:string="";

  obj:updateContact={} as updateContact;
  

  goback(){
    this.router.navigateByUrl('/dash')
  }

  addContact(){

    if(this.formgrp.valid){
      this.obj={
        name:this.formgrp.value.name,
        qualification:this.formgrp.value.qualification,
        mobile:this.formgrp.value.mobile,
        email:this.formgrp.value.email,
        id:this.id?this.id:this.addService.temp.toString(),
      }


      
      
      if(this.id==''){
        this.addService.setContact(this.obj)
        this.http.post('http://localhost:3000/contact-details/add', {
          "userId":parseInt(localStorage.getItem('userId')!),
          "contatcName":this.obj.name,
          "contactQualification":this.obj.qualification,
          "contactMobile":this.obj.mobile,
          "email":this.obj.email
        }).subscribe(data =>{
          console.log(data);
        })
      }
      else{
        // console.log(this.addService.obj2)
        let tag="";
        for(let i=0;i<this.addService.obj2.length;i++){
          if(this.addService.obj2[i].contactId==this.id){
            tag=this.addService.obj2[i].tag!;
          }
        }
        let obj:updateContact2={
          contatcName:this.formgrp.value.name,
          contactQualification:this.formgrp.value.qualification,
          contactMobile:this.formgrp.value.mobile,
          email:this.formgrp.value.email,
          tag:tag
        }
        // console.log(this.formgrp.value.name)
        this.addService.updateContact(this.id,obj)
      }
      this.formgrp.reset();
    }
    else{
      alert("invalid")
    }


  }
}


interface inputs{
  name:string;
  qualification:string;
  mobile:string;
  email:string;
}