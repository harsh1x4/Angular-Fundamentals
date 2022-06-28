import { Component, Input, Output, EventEmitter   } from '@angular/core';

@Component({
    selector: 'student-count',
    templateUrl: 'studentCount.component.html',
    styleUrls: ['studentCount.component.css']
})
export class StudentCountComponent {
    @Input()
    all?: number;

    @Input()
    india?: number;

    @Input()
    us?: number;


    selectedRadioButtonValue: string = 'All';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> =
                                        new EventEmitter<string>();

    // This method raises the custom event. bind this method to the change event of all the 3 radio buttons
    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged
            .emit(this.selectedRadioButtonValue);
    }
}