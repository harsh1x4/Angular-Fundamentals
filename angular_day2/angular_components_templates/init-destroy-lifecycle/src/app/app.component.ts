import { Component, OnInit, OnDestroy } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl:'app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  value?:string;
  // ComponentDestroy?: boolean=false;
  ComponentDestroy?: boolean=true;


  submitValues(inputvalue:any){
    this.value = inputvalue.value;
  }

  destroy(){
    console.log('destroy called...');
    this.ComponentDestroy=true;
  }
}
