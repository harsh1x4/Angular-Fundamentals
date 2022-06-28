import { Component } from '@angular/core';

@Component({
    selector: 'student-count',
    templateUrl: 'studentCount.component.html',
    styleUrls: ['studentCount.component.css']
})
export class StudentCountComponent {
    all: number = 3;
    india: number = 2;
    us: number = 1;
}