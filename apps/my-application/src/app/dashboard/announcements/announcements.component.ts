import { Component, OnInit } from '@angular/core';
import { announcements } from '../interface/announcements';
import { AnnouncementsService } from '../announcements.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  constructor(private classObj:AnnouncementsService) { }


  obj:announcements[]=new Array();
  

  ngOnInit(): void {
    this.obj=this.classObj.getAnnocuments();
  }

}
