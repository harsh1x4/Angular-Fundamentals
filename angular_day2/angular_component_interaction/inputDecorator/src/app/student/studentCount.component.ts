import { Component, Input  } from '@angular/core';

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
}