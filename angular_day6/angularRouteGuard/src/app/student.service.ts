import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  // hasAdminRights():boolean{
  //   return true;
  // }

  hasAdminRights():boolean{
    return false;
  }

}
