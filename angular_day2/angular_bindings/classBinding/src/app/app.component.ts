import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html', 
  styleUrls: ['app.component.css'] 
})
export class AppComponent {
  title = 'a new way to web development';
  hasError = true;
  needFont = true;

  multipleClasses ={
    // "classRed":!this.hasError,
    "classPink":this.hasError,
    "addFont":this.needFont,
  }
}
