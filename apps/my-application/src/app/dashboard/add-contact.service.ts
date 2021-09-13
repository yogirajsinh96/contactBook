import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import * as naturalCompare from 'string-natural-compare';

import {updateContact, updateContact2} from './contact.interface'
// import { orderBy } from 'natural-orderby';

// const naturalCompare=require('string-natural-compare');
// import {string-naturalCompare}

@Injectable({
  providedIn: 'root'
})


export class AddContactService {

  constructor(private http:HttpClient) { }

  obj:updateContact[]=new Array();
  temp:number=0;
  setContact(obj:updateContact){
    this.obj[this.temp]=obj;
    this.temp++;
    
  }

  demoObj:updateContact2={} as updateContact2;
  obj2:updateContact2[]=new Array();

  str:object[]=[];
  demoObjarray:updateContact2[]=new Array();
  setContacts(obj:updateContact[]){
    this.str=[];
    this.demoObjarray=[];
    this.obj=[...this.obj,...obj];
    for(let i=0;i<obj.length;i++){
      this.demoObj.email=obj[i].email;
      this.demoObj.userId=localStorage.getItem('userId')!;
      this.demoObj.contactQualification=obj[i].qualification;
      this.demoObj.contatcName=obj[i].name;
      this.demoObj.contactMobile=obj[i].mobile;
      this.demoObjarray.push(this.demoObj);
      // console.log(this.demoObj)
      this.str.push(this.demoObj);
      this.demoObj={} as updateContact2;
    }
    // console.log(JSON.stringify(this.str))
    // this.str=JSON.stringify(this.demoObjarray);
    // console.log(this.str)
    let str=JSON.stringify(this.str)
    console.log(str)
    // setTimeout(() => {   
      this.http.post('http://localhost:3000/contact-details/addbulk' , {data:str} ).subscribe(data=>{
        console.log(data)
        this.getContact();
      })
    this.temp=this.obj.length;
  }

  getContact() {
    // console.log(this.obj);
     this.http.get<updateContact2[]>('http://localhost:3000/contact-details/get?id='+localStorage.getItem('userId')).subscribe(data=>{

      // this.obj2=data;

    //  let val=["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"];


    //  this.obj2=this.quick_Sort(this.obj2);

  //   for(let i=0;i<this.obj2.length;i++){
  //   for(let j=0;j<this.obj2.length;j++){
  //       let tmp=this.obj2[i].contatcName.charAt(0);
  //       let tmp1=this.obj2[j].contatcName.charAt(0);
  //       if( val.indexOf(tmp) < val.indexOf(tmp1)){
  //           let tmp3=this.obj2[i];
  //           this.obj2[i]=this.obj2[j];
  //           this.obj2[j]=tmp3;
  //       }
  //   }
  // }




       this.obj2=data.sort((a, b) => a.contatcName.localeCompare(b.contatcName ,'en' ,{ numeric:true , caseFirst:'upper' }) );

      // this.obj2=data.sort((a,b)=> new Intl.Collator('en', { caseFirst: 'upper' } ).compare(a.contatcName,b.contatcName))
       

      //  console.log(data)

      //  this.obj2.sort((a, b) => naturalCompare(a, b, {caseInsensitive: true}));
      //  this.obj2.sort((a, b) => a.contatcName.toLowerCase() > b.contatcName.toLowerCase() ? 1 : -1);
      
      // this.obj2.sort( (a, b) => a.contatcName.localeCompare(b.contatcName, undefined, {'sensitivity': 'base'}));

      // this.obj2.sort((a, b) => naturalCompare(a.contatcName, b.contatcName, {caseInsensitive: true}));
      // this.obj2.sort(naturalCompareCI);

      // this.obj2.sort((a, b) => a.contatcName.localeCompare(b.contatcName, undefined, { numeric: true, sensitivity: 'base' }));

      //  this.obj2.sort((a, b) => a.contatcName.localeCompare(b.contatcName, 'en', { numeric: true, sensitivity: 'base' }));

      // this.obj2.sort((a, b) => a.contatcName.localeCompare(b.contatcName, 'en', { numeric: true, sensitivity: 'base' }));
     });
    // return 
  }

  quick_Sort(origArray:any[]):any {
     let val=["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"];

	if (origArray.length <= 1) { 
		return origArray;
	} else {

		let left :any[]= [];
		let right:any[] = [];
		var newArray:any[] = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (val.indexOf(origArray[i].contatcName.charAt(0)) < val.indexOf(pivot.contatcName.charAt(0))) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(this.quick_Sort(left), pivot, this.quick_Sort(right));
	}
}

  
  updateContact(id:string,obj:updateContact2){

    // console.log(obj)

    this.http.patch("http://localhost:3000/contact-details/"+id,obj).subscribe(data=>{
      console.log(data)
    });
    this.getContact();
    // for(let i=0;i<this.obj.length;i++){
    //   if(this.obj[i].id==obj.contactId){
    //     this.obj[i].name=obj.;
    //     this.obj[i].qualification=obj.qualification;
    //     this.obj[i].email=obj.email;
    //     this.obj[i].mobile=obj.mobile;
    //   }
    // }
  }

  addTag(id:string,tag:string){
     this.http.patch("http://localhost:3000/contact-details/update/"+id,{tag:tag}).subscribe(data=>{
      console.log(data)
      this.getContact();
    });
  }
}
