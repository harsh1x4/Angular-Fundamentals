import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: 'child.component.html'
})
export class ChildComponent implements OnInit {

// child component will receive the property from parent using @Input() decorator

//step-3
@Input() public dataFromParent: any;
// @Input('dataFromParent') public message: any;



// child event generation, to send some data to parent component
@Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // on button click this will emit out the event data and this
  //has to be captured by the parent component
  generateEvent(){
    this.childEvent.emit("From Child: Event generated from child component");
  }

}
