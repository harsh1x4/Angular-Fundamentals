import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild(HelloComponent) hello?: HelloComponent;

    ngAfterViewInit() {
    console.log('From ngAfterViewInit:', this.hello?.name); 
    this.hello!.name="Welcome from AppComponent";
  }
}


//1- create a property which holds reference to child component
// childRef?: ChildComponent;

//2- add viewChild decorator
//@ViewChild(ChildComponent) childRef?: ChildComponent;

//3- use AfterViewInit
//     ngAfterViewInit(): void {
//       this.childRef!.message = "Hello I am parent: how are you";
//     }


// message ==> child component property






