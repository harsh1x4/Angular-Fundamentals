import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';

const routes: Routes = [
  
  // {path:'**',component:PageNotFoundComponent},
  {path:'students',component:StudentListComponent},
  {path:'teachers',component:TeachersListComponent},



  // This wildcard route(**) should be placed at the end
  {path:'**',component:PageNotFoundComponent},



    // redirecting routes- we must also configure the default routes
    // {path:'',component:StudentListComponent},
       {path:'',redirectTo:'/students',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
