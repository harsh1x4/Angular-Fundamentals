import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'we are learning angular pipes concept';
  
  myNumber: number =90;

  
  
  firstName = 'SUN';
  lastName = 'ORA';

  studentObject ={
    "country":"INDIA",
    "city":"MUMBAI"
  }

  public mydate = new Date();
}
