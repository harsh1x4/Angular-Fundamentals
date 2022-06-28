import { Component,OnInit } from '@angular/core';
import { IStudent } from './student';
import { StudentService } from './student.service';



@Component({
    selector: 'list-student',
    templateUrl: 'studentList.component.html',
    styleUrls: ['studentList.component.css'],
    providers: [StudentService]
})
export class StudentListComponent implements OnInit{

    students: IStudent[] = [];

    // This property keeps track of which radio button is selected.We have set the default value to All, so all the employees
    // are displayed in the table by default
    selectedStudentCountRadioButton: string = 'All';

    constructor(private _studentService: StudentService) {
    }

    ngOnInit() {
        this.students = this._studentService.getStudents();
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