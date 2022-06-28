import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-hello',
  // selector: '.app-hello',
  selector: '[app-hello]',
  // templateUrl: './hello.component.html',
  // template: '<h1>Welcome to Inline html template</h1>',
  template: `<h1>
                 We have used backtick here to align html in multiple lines
            </h1>`,
  // styleUrls: ['./hello.component.css']
  styles: [`
      h1{
        color:deeppink;
      }
  `]
})


// @Component({
//   selector: 'app-hello',
//   templateUrl: './hello.component.html',
//   styleUrls: ['./hello.component.css']
// })
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
