import { Injectable } from '@angular/core';
import { IStudent } from './student';



// The @Injectable() decorator is used to inject other dependencies
// into this service. 
//Our service here, does not have any dependencies at the moment, we may remove the @Injectable() decorator and the
// service works exactly the same way. 
//However, Angular recommends to always use @Injectable() decorator to ensures consistency

@Injectable()
export class StudentService {
    getStudents(): IStudent[] {
        return [
            {rollNumber: 101, firstName: 'SUN', lastName: 'ORA',country: 'India', location: 'Mumbai'},
            {rollNumber: 102, firstName: 'John', lastName: 'Garry',country: 'US', location: 'Atlanta'},
            {rollNumber: 103, firstName: 'Prashant', lastName: 'Ojha',country: 'India', location: 'Delhi'},
        ];
    }
}
