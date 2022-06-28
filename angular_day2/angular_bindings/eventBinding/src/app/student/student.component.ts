import { Component } from '@angular/core';

@Component({
    selector: 'my-student',
    templateUrl: 'student.component.html',
    styleUrls: ['student.component.css']

})
export class StudentComponent {
    firstName: string = 'SUN';
    lastName: string = 'ORA';
    columnSpan: number = 2;
    showDetails: boolean = true;  

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }

}