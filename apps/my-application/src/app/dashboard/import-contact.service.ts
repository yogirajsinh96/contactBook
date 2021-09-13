import { Injectable } from '@angular/core';
import { displayStyple } from './interface/displayStyle';

@Injectable({
  providedIn: 'root'
})
export class ImportContactService {

  constructor() { }

  display:displayStyple={display:"main hidden"};
  count:number=0;

  trackValue(){
    console.log("display : "+this.display+", count : "+this.count)
  }
  
  getDisplay(){
    return this.display;
  }

  setDisaply(temp:string){
    this.display.display=temp;
  }

}
