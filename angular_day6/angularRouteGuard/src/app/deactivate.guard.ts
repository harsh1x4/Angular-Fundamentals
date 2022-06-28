import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VendorComponent } from './vendor/vendor.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<VendorComponent> {
 
  canDeactivate():boolean{
    return window.confirm('Do you really want to navigate away from this page???');
  }
  
}
