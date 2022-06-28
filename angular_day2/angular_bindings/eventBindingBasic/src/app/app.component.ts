import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button [class.abc]="helloCss" (click)="callMe()">Click Here</button>
  `,
  styles: [`
    .abc{
      color:red;
      background-color:yellow;
      border:4px dotted red;
    }
  `]
})
export class AppComponent {
  title = 'eventBindingBasic';
  helloCss = true;

  callMe(){
    console.log("You have clicked me for sure...");
  }
}
