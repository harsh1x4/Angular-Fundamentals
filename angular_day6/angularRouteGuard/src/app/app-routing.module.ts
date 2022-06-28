import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateGuard } from './activate.guard';
import { AdminComponent } from './admin/admin.component';
import { DeactivateGuard } from './deactivate.guard';
import { HomeComponent } from './home/home.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Admin',component:AdminComponent,canActivate:[ActivateGuard]},
  {path:'Vendor',component:VendorComponent,canDeactivate:[DeactivateGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
