import { Component } from '@angular/core';

@Component({
    selector: 'list-student',
    templateUrl: 'studentList.component.html',
    styleUrls: ['studentList.component.css']
})
export class StudentListComponent {

    students: any[];

    constructor(){

        this.students = [
        {
            rollNumber: 101, 
            firstName: 'SUN', 
            lastName: 'ORA',
            country: 'India', 
            location: 'Mumbai'
        },
        {
            rollNumber: 102, 
            firstName: 'John', 
            lastName: 'Garry',
            country: 'us', 
            location: 'Atlanta'
        },
        {
            rollNumber: 103, 
            firstName: 'Prashant', 
            lastName: 'Ojha',
            country: 'India', 
            location: 'Delhi'
        },
        {
            rollNumber: 104, 
            firstName: 'Jacky', 
            lastName: 'Orelly',
            country: 'us', 
            location: 'nyc'
        },
    ];

   }

    getTotalStudentsCount(): number {
        return this.students.length;
    }

    getIndiaCount(): number {
        return this.students.filter(e => e.country === 'India').length;
    }

    getUsCount(): number {
        return this.students.filter(e => e.country === 'Us').length;
    }
}