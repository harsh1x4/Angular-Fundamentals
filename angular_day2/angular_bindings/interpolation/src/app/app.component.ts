import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    firstName: string = 'SUN';
    lastName: string = 'ORA';
    myPicture: string = '../assets/images/img.jpg'
    

    getFullName(): string {
      return this.firstName + ' ' + this.lastName;
  }

}