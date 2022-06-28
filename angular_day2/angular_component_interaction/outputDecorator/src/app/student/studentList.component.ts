import { Component } from '@angular/core';

@Component({
    selector: 'list-student',
    templateUrl: 'studentList.component.html',
    styleUrls: ['studentList.component.css']
})
export class StudentListComponent {

    students: any[];

    // This property keeps track of which radio button is selected.We have set the default value to All, so all the employees
    // are displayed in the table by default
    selectedStudentCountRadioButton: string = 'All';


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
            country: 'US', 
            location: 'Atlanta'
        },
        {
            rollNumber: 103, 
            firstName: 'Prashant', 
            lastName: 'Ojha',
            country: 'India', 
            location: 'Delhi'
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
        return this.students.filter(e => e.country === 'US').length;
    }

    onStudentCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedStudentCountRadioButton = selectedRadioButtonValue;
    }
}