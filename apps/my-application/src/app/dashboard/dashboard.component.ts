import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  classList="menu-list active";
  constructor(private router:Router) { }

  ngOnInit(): void {
    
    //this.router.navigateByUrl('/contacts/list');
  }

  changeClass(){
  
    
  }

}
