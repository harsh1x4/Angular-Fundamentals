import { Component } from '@angular/core';

@Component({
    selector: 'my-student',
    templateUrl: 'student.component.html',
    styleUrls: ['student.component.css']

})
export class StudentComponent {
    firstName: string = 'SUN';
    lastName: string = 'ORA';
}