import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // template: `
    //             UserName : <input [value]='name'>
    //             <br><br>
    //             User entered : {{name}}
    //           `


    template: `Name : <input [(ngModel)]='username'>
                <br>
                You entered : {{username}}
              `
})
export class AppComponent {
    username: string = 'SUNORA';
}