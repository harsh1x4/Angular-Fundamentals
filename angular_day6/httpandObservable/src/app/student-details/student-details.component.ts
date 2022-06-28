import { Component, OnInit } from '@angular/core';
import { StudentServicesService } from '../student-services.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public students = [] as  any;
  public errorMessage:any;
 
  // constructor injection
  constructor(private _StudentServicesService:StudentServicesService) { }

  ngOnInit(): void {
    // subscribe to the observable returned by the getStudents() method
    // the data retrurned asynchronously and we have to assign that data to the class 
    //property students
    this._StudentServicesService.getStudents()
    .subscribe(returnedData => this.students = returnedData);
  }


  //ngOnInit(): void {
    // subscribe to the observable returned by the getStudents() method
    // the data retrurned asynchronously and we have to assign that data to the class property students
    //this._StudentServicesService.getStudents()
    //.subscribe(returnedData => this.students = returnedData,
               //error => this.errorMessage=error);
  //}
}
