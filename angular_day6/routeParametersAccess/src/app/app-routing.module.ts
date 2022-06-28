import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyDetailsComponent } from './technology-details/technology-details.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
   {path:'',redirectTo:'/technology',pathMatch:'full'},
   {path:'technology',component:TechnologyComponent},
   {path:'technology/:tid',component:TechnologyDetailsComponent},


  // used for relative navigation
  //  {path:'',redirectTo:'/technology-demo',pathMatch:'full'},
  //  {path:'technology-demo',component:TechnologyComponent},
  //  {path:'technology-demo/:tid',component:TechnologyDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
