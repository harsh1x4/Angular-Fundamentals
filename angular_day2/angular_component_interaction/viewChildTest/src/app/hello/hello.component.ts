import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})

//Child Component
export class HelloComponent  {
  @Input() name?: string="Welcome from HelloComponent";
}
