import { Component } from '@angular/core';

@Component({
    selector: 'list-student',
    templateUrl: 'studentList.component.html',
    styleUrls: ['studentList.component.css']
})
export class StudentListComponent {

    students: any[] = [
        // {
        //     rollNumber: 101, 
        //     firstName: 'SUN', 
        //     lastName: 'ORA',
        //     country: 'India', 
        //     location: 'Mumbai'
        // },
        // {
        //     rollNumber: 102, 
        //     firstName: 'John', 
        //     lastName: 'Garry',
        //     country: 'US', 
        //     location: 'Atlanta'
        // },
        // {
        //     rollNumber: 103, 
        //     firstName: 'Prashant', 
        //     lastName: 'Ojha',
        //     country: 'India', 
        //     location: 'Delhi'
        // },
    ];
}