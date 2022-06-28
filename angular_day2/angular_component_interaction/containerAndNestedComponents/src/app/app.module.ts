import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentCountComponent } from './student/studentCount.component';
import { StudentListComponent } from './student/studentList.component';

@NgModule({
  declarations: [
    AppComponent, StudentComponent, StudentListComponent, StudentCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
