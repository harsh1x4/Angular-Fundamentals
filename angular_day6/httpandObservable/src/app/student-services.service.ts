import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from './student';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {

  private _url:string ="/assets/studentsData/student.json";

  // constructor injection
  constructor(private http:HttpClient) { }

  getStudents():Observable<IStudent[]>{
    // return this.http.get(this._url);
    return this.http.get<IStudent[]>(this._url);
  }






  // getStudents():Observable<IStudent[]>{
  //   // return this.http.get(this._url);
  //   return this.http.get<IStudent[]>(this._url).pipe(catchError(this.handleError));
  // }

  // handleError(error: HttpErrorResponse){
  //   return Observable.throw(error.message || 'Server error occured...');
  // }

}
