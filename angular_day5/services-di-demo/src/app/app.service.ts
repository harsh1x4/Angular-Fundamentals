import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _studentList: Array<any> = [];

  constructor() { 
    this._studentList = [{name:'Amit',age:20,city:'Mumbai',dob:'10-10-2004'}];
  }

  returnStudentData(): Array<any> {
    return this._studentList;
  }

  addStudentData(item:any): void {
    this._studentList.push(item);
  }
}
