import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div>
                    <h1>{{pageHeader}}</h1>
                    <my-student></my-student>
               </div>
               
               <input type="text" value="john" id="test"/>
               `
})
export class AppComponent {
    pageHeader: string = 'Student Information';
}