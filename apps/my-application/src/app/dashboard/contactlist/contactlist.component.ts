import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddContactService } from '../add-contact.service';
import { ImportContactService } from '../import-contact.service';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { ImportContactComponent } from './import-contact/import-contact.component';
import { displayStyple } from '../interface/displayStyle';
// import { count } from 'console';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  constructor(private router:Router,private service:AddContactService,private importDisplay:ImportContactService) { }
  

  display='auto';

  name:string='bla';

  displayTable:string='display:none';
  id:string='';

  popupStyle:string="display: none;"
  style:string="";
  styleTable:string='';
  temp=0;
  ngOnInit(): void {
    //alert()
  }

  redirectme(){
    this.router.navigateByUrl('/dash/add')
  }

  refreshMe(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  detectChanges(){

  }
  
  selectMode(){
    if(this.temp==0){
      this.style="background-color: lightgray;";
      this.temp++;
    }
    else{
      this.style="background-color: white;";
      this.temp=0;
    }

    // alert()
  }

  closePopup(){
    this.popupStyle="display: none;"
  }

  
  setTags(chk1:HTMLInputElement,chk2:HTMLInputElement){
    let tags:string="";
    if(chk1.checked){
      tags=tags+chk1.value;
      chk1.checked=false;
    }
    if(chk2.checked){
      tags=tags+chk2.value;
      chk2.checked=false;
    }

    // alert(this.id)
    this.service.addTag(this.id,tags);

    this.popupStyle="display: none;"

  }

  // count:number=0;
  selectImport(){
    if(this.tableCounte==0){
      if(this.importDisplay.count==0){
        this.importDisplay.setDisaply('main show');
        this.importDisplay.count=1;
        // this.importdisp.change();
      }
      else{
        this.importDisplay.setDisaply('main hidden');
        this.importDisplay.count=0;
      }
    }
  }

  tableCounte=0;


  selectTable(){
    if(this.tableCounte==0){

      this.displayTable='display:block';
      this.styleTable="background-color: lightgray;";
      this.tableCounte=1;
      this.display='hidden';
      // document.documentElement.scrollTop = 0; 
      //  document.body.scrollTop = 0; 
    }
    else{
      this.displayTable='display:none';
      this.styleTable="background-color: white;";
      this.tableCounte=0;
      this.display='auto';

    }
  }

}
