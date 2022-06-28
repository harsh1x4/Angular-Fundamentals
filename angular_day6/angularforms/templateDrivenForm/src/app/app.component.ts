import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  model = new Student();

  Subjects: string[] = [
    'Science',
    'Maths',
    'Physics',
    'Chemistry'
  ];

  constructor() { }

  submit(data: { value: any; }) {
    console.log(data.value)
  }
}



export class Student {
  public name!: string;
  public email!: string;
  public password!: string;
  public Subjects!: string;
}

