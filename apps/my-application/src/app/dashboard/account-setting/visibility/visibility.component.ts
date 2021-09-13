import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.css']
})
export class VisibilityComponent implements OnInit {

  obj=[{
    name:"Middle name" },{name:"Last Name"},{name:"Email Address"},{name:'Job Title'},{name:"mage Link"}
  ] 
  constructor( ) { }

  ngOnInit(): void {
  }

}
