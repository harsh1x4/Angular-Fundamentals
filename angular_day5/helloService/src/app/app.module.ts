import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentComponent } from './student/student.component';
import { StudentServicesService } from './student-services.service';
import { SquareService } from './square.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StudentServicesService,SquareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
