import { Injectable } from '@angular/core';
import { enrollment } from './interface/enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor() { }

  enrollment:enrollment[]=new Array();
  // temp:number=0;

  addEnrollment(obj:enrollment){
    this.enrollment.push(obj);
    console.log(this.enrollment);
  }

  getEnrollment(){
    return this.enrollment;
  }
  
}
