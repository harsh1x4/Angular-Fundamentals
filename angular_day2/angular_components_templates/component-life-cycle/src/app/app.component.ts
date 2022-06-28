import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
    selector: 'app-root',
    template: `Enter Value : <input type='text' [(ngModel)]='inputValue'/>
               <br/><br/>
               <child [sampleInput]='inputValue'></child>
              `
})
export class AppComponent implements OnChanges,OnInit{
    inputValue: string = 'SUN-ORA';
    data:number = 100;

    constructor() { 
        console.log('new data is: ${this.data}')
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges - data is: ${this.data}')
    }

    ngOnInit(): void {
        console.log('ngOnInit - data is: ${this.data}')
    }
}

