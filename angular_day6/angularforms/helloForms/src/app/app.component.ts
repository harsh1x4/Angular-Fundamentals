import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = ['JAVA','SPRING MVC',
            'SPRING CORE',
            'SPRING BOOT'];
}
