import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//step-1 service creation and holding data in it
//step-2 register service in providers [] in app.module.ts
//step-3 declare the dependency in components inside constructor
// ng g service StudentService


export class StudentServicesService {

  constructor() {
    console.log('StudentServicesService instance created automatically');
   }

  getStudents(){
    return [
      {"RollNumber":1101,"Name":"Rahul","Age":22,"Country":"India"},
      {"RollNumber":1102,"Name":"John","Age":18,"Country":"US"},
      {"RollNumber":1103,"Name":"Garry","Age":36,"Country":"China"},
      {"RollNumber":1104,"Name":"Sohail","Age":28,"Country":"PAK"},
      {"RollNumber":1105,"Name":"Choing","Age":26,"Country":"Japan"}
    ];
  }
}
