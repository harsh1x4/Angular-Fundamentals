import { Component } from '@angular/core';

@Component({
    selector: 'my-student',
    templateUrl: 'student.component.html'
})
export class StudentComponent {
    firstName: string = 'SUN';
    lastName: string = 'ORA';
}