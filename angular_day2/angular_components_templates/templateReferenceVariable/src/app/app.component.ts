import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>

      <p>
          <label for="firstName">First Name</label>
          <input type="text" #firstName>  
      </p>
      
      <p>
          <button (click)="sayHello(firstName.value)">Hello</button>
      </p>
      `,
})
export class AppComponent {
  title = 'templateReferenceVariable';

  sayHello(value: any){
    console.log(value);
  }
}
