import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div>
                    <h1>{{pageHeader}}</h1>
                    <my-student></my-student>
                    <app-student-details></app-student-details>
               </div>`
})
export class AppComponent {
    pageHeader: string = 'Student Information';
}