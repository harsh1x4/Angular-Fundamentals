import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get userName(){
    return this.studentRegistration.get('userName');
  }

  
  constructor(private fb: FormBuilder){}

  studentRegistration = this.fb.group({
    // userName: ['', Validators.required],
    userName: ['', [Validators.required,Validators.minLength(5)]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: ['New Delhi'],
      state: ['Delhi'],
      location: ['']
    })
  });

 // set data to different form control values
 // setValue() / patchValue() method
  loadData(){
    // this.studentRegistration.setValue({
    //   userName: 'SUNORA',
    //   password: 'sun',
    //   confirmPassword: 'sun',
      // address: {
      //   city: 'Mumbai',
      //   state: 'Maharashtra',
      //   location: 'Parel'
      // }
    // });

    // this.studentRegistration.patchValue({
    //   userName: '',
    //   password: '',
    //   confirmPassword: '',
    // });

  }


}
