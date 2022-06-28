import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public formData:any ={};
  public showMessage:boolean =false;

  constructor(){
    console.log('constructor called...');
  }

  ngOnInit(): void {
    console.log('ngOnInit called...');
  }

  registerUser(formData:NgForm){
    this.formData=formData.value;
    this.showMessage=true;
  }

}



