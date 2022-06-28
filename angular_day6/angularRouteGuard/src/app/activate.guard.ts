import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {

constructor(private studentService:StudentService,private route:Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.studentService.hasAdminRights()){
        return true;
      }else{
        alert("Sorry, you don't have the access to this page, redirecting to home");
        this.route.navigate(['Home']);
      }
      return true;
  }
  
}
