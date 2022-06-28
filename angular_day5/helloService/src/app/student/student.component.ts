import { Component, OnInit } from '@angular/core';
import { StudentServicesService } from '../student-services.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {


  // public students = [];
  //  students : string[] = [];
  public students = [] as  any;

  // public students = [
  //   {"RollNumber":1101,"Name":"Rahul","Age":22,"Country":"India"},
  //   {"RollNumber":1102,"Name":"John","Age":18,"Country":"US"},
  //   {"RollNumber":1103,"Name":"Garry","Age":36,"Country":"China"},
  //   {"RollNumber":1104,"Name":"Sohail","Age":28,"Country":"PAK"},
  //   {"RollNumber":1105,"Name":"Choing","Age":26,"Country":"Japan"}
  // ];


 // constructor injection
  constructor(private _StudentServicesService:StudentServicesService) { }

  ngOnInit(): void {
    this.students = this._StudentServicesService.getStudents();
  }

}
