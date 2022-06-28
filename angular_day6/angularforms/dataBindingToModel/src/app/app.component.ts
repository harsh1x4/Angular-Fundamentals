import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = ['JAVA','SPRING MVC','SPRING CORE','SPRING BOOT'];

  //student model object created
  studentModel = new Student('SUN','sun@gmail.com',9511992987,'','male');
}
