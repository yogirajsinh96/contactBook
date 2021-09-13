import { Injectable } from '@angular/core';
import { announcements } from './interface/announcements';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {

  constructor() { }

  id:number=0;

  obj:announcements[]=new Array();

  setAnnoucement(addAnnoucement:announcements){
    this.obj.push(addAnnoucement);

    // alert("added"+this.obj.length )
  }

  getAnnocuments(){
    // alert(this.obj.length)
    return this.obj;
  }

}
