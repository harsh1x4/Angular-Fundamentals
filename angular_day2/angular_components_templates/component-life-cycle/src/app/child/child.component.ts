import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
    selector: 'child',
    template: `You entered : {{sampleInput}}`
})
export class ChildComponent implements OnChanges {
   
    @Input() sampleInput: string | undefined;

    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ': currentValue = '+ current + ', previousValue = ' + previous);
            console.log(`${propertyName}: currentValue = ${current }, previousValue = ${previous }`);
        }
    }
}