import { ApplicationRef, Component, OnInit } from '@angular/core';
import { ImportContactService } from '../../import-contact.service';
import { displayStyple } from '../../interface/displayStyle';
import { updateContact } from '../../contact.interface';
import { AddContactService } from '../../add-contact.service';
import { ContactlistComponent } from '../contactlist.component';
import { DisplayContactComponent } from '../display-contact/display-contact.component';

@Component({
  selector: 'app-import-contact',
  templateUrl: './import-contact.component.html',
  styleUrls: ['./import-contact.component.css']
})
export class ImportContactComponent implements OnInit {

  contact:updateContact[]=new Array();
  displayStyple:displayStyple=this.service.getDisplay();
  constructor(private service:ImportContactService ,private addContactService:AddContactService) { 
    this.temp=0;
  }

  display:string='show'
  displayBtn:string='hidden';
  disaplyTable:string='hidden'
  ngOnInit(): void {
    // this.displayStyple=this.service.getDisplay();
  }


  closePopup(container:HTMLDivElement){
    this.displayStyple.display="main hidden";
    this.service.count=0;
      // container.innerHTML! ='';
      this.display='show';
      this.displayBtn='hidden';
      this.selectedContacts=0;
    this.err=0;

    this.contact=[];
    this.contactUpdate=[];
    this.selectedContacts=0;
    

  }



  openFile(file:HTMLInputElement){
    file.click();
  }

  contactObj:updateContact={} as updateContact;
  temp=0;
  err=0;
  selectedContacts:number=0;
  onChange(file:HTMLInputElement,container:HTMLDivElement){
    let tableData='';
    let table='<table><tr><td>';
    let start=0;
    this.err=0;
    // alert(file.files![0].type)

    // temp=0;
    if(file.files![0].type=='text/csv'){
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        tableData = fileReader.result!.toString();
        // container.innerHTML! =table;
        // tableData=tableData.replaceAll

       var lines = tableData.split("\n"),
          output:any = [],
          i;
      for (i = 0; i < lines.length-1; i++){
        let temp=lines[i].slice(0,-1).split(",");
        console.log(temp)
        if(i>0){

          // let val='/\S+@\S+\.\S+/';
          if(temp[1]!=''&&temp[2]!=''&&temp[3]!=''&&temp[4]!=''){
            //  if()
            this.contactObj={
              id:this.temp.toString(),
              name:temp[1],
              qualification:temp[2],
              email:temp[3],
              mobile:temp[4]
            }
  
          }
          else{
              this.contactObj={
              id:this.temp.toString(),
              name:temp[1],
              qualification:temp[2],
              email:temp[3],
              mobile:temp[4]
            }
            this.err++;
          }
          // this.addContactService.temp++;
          this.temp++;
          this.contact.push(this.contactObj)
        }
        // if(i==0){
        //   output.push("<tr><td>Select</td><td>"
        //             + lines[i].slice(0,-1).split(",").join("</td><td>")
        //             + "</td></tr>");
        // }
        // else{

        //   output.push(`<tr><td><input type='checkbox' id="+this.addContactService.temp.toString()+" onclick='${()=>{alert()}}' /></td><td>`
        //               + lines[i].slice(0,-1).split(",").join("</td><td>")
        //               + "</td></tr>");
        // }
      }
      // output = "<table style='border=1px'>" + output.join("") + "</table>";

      // container.innerHTML! =output;
      }
      fileReader.readAsText(file.files![0]);
      this.display='hidden';
      this.displayBtn='show';

      this.disaplyTable='show';
      // console.log(this.contact)

    }else{
      alert("select only csv file")
    }

  }
  
  contactIds:string[]=[];

  // temp=this.addContactService.temp;
  checked(id:string,check:HTMLInputElement){
    // alert(id)
    // this.contactIds.push(id)
    for(let i=0;i<this.contact.length;i++){
      if(id==this.contact[i].id){
        this.contact[i].id=this.addContactService.temp.toString();
        this.addContactService.temp++;
        this.contactUpdate.push(this.contact[i])
      }
    }
    if(check.checked){
      this.selectedContacts++;
    }else{
      this.selectedContacts--;

    }
  }

    contactUpdate:updateContact[]=new Array();

  importContact(container:HTMLDivElement){
    
    this.addContactService.setContacts(this.contactUpdate);
    this.closePopup(container);
    // this.displayContact.callme();
    // this.appRef.tick();
    this.contact=[];
    this.contactUpdate=[];
    this.selectedContacts=0;
    this.err=0;
    // alert(this.selectedContacts)
    // alert(this.contactIds)
  }


  selectAll(checkBox:HTMLInputElement){
    if(checkBox.checked){
      let checkbox=document.querySelectorAll('input[type=checkbox]')!;
      for(let i=0;i<checkbox.length;i++){
        checkbox[i].setAttribute('checked','ture');
      }
      this.contactUpdate=this.contact;
    }
    else{

    }
  }
}
