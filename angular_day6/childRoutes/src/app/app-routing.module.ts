import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyDetailsComponent } from './technology-details/technology-details.component';
import { TechnologySummaryComponent } from './technology-summary/technology-summary.component';
import { TechnologyTrainingCostComponent } from './technology-training-cost/technology-training-cost.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
   {path:'',redirectTo:'/technology',pathMatch:'full'},
   {path:'technology',component:TechnologyComponent},

   {
     path:'technology/:tid',
     component:TechnologyDetailsComponent,
     
     children:[
      {path:'summary',component:TechnologySummaryComponent},
      {path:'trainingcost',component:TechnologyTrainingCostComponent},
     ]
    
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
