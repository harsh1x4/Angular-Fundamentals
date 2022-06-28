
1st check:


import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl:'app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  value?:string;

  submitValues(inputvalue:any){
    this.value = inputvalue.value;
  }
}


---------------------------------------------------------
app.component.html:

<p>Parent Component</p>
<input type="text" placeholder="Text here" #inputvalue/><br/><br/>
<button (click)="submitValues(inputvalue)">HIT</button>
<app-child [SomeValue]="value"></app-child>


--------------------------------------------------------------------

child:



import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() SomeValue?='sunora'

  constructor() { }

  ngOnInit(): void {
  }

}



-----------------------------------------------------------------
child.component.html:

Input Value:<strong>{{SomeValue}}</strong>

------------------------------------------------------------------






2nd Check:OnInit

//check all lifecycle methods @ child component:


import { Component, Input, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() SomeValue?='sunora'

  constructor() {
    console.log('constructor called...');
   }
  ngOnInit(): void {
    console.log('ngOnInit called...');
  }

}

------------------------------------------------------------------------





3rd check:OnChanges / SimpleChanges


import { Component,Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  @Input() SomeValue?='sunora'

  constructor() {
    console.log('constructor called...');
   }

  ngDoCheck(): void {
    console.log('ngDoCheck called...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges called...');
    // console.log(changes);
    console.log('ngOnChanges called'+ changes.SomeValue.currentValue);
  }

  ngOnInit(): void {
    console.log('ngOnInit called...');
  }

}

----------------------------------------------------------------------------------



4th check:DoCheck



import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges, DoCheck {

  @Input() SomeValue?='sunora'

  constructor() {
    console.log('constructor called...');
   }

  ngDoCheck(): void {
    console.log('ngDoCheck called...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges called...');
    // console.log(changes);
    console.log('ngOnChanges called'+ changes.SomeValue.currentValue);
  }

  ngOnInit(): void {
    console.log('ngOnInit called...');
  }

}

----------------------------------------------------------------------------------------




5th check:AfterContentInit  [needs <ng-content>]
//<app-child *ngIf="ComponentDestroy" [SomeValue]="value">This is added for checking ngAfterContentInitCheck {{value}}</app-child>



import { AfterContentInit,Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges, DoCheck, AfterContentInit {

  @Input() SomeValue?='sunora'

  constructor() {
    console.log('constructor called...');
   }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called...');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges called...');
    // console.log(changes);
    console.log('ngOnChanges called'+ changes.SomeValue.currentValue);
  }

  ngOnInit(): void {
    console.log('ngOnInit called...');
  }

}


-----------------------------------------------------------------------------------------



6th check:

import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

  @Input() SomeValue?='sunora'

  constructor() {
    console.log('constructor called...');
   }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called...');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called...');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges called...');
    // console.log(changes);
    console.log('ngOnChanges called'+ changes.SomeValue.currentValue);
  }

  ngOnInit(): void {
    console.log('ngOnInit called...');
  }

}



...........<app-child [SomeValue]="value">This is added for checking ngAfterContentInitCheck {{value}}</app-child>



-----------------------------------------------------------------------------------------------




7th check:AfterViewInit


import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit {

  @Input() SomeValue?='sunora'

  constructor() {
    console.log('constructor called...');
   }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called...');
  }
  
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called...');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called...');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges called...');
    // console.log(changes);
    console.log('ngOnChanges called'+ changes.SomeValue.currentValue);
  }

  ngOnInit(): void {
    console.log('ngOnInit called...');
  }

}

-------------------------------------------------------------------------------------------



8th check:AfterViewChecked



import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked {

  @Input() SomeValue?='sunora'

  constructor() {
    console.log('constructor called...');
   }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called...');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called...');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called...');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called...');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges called...');
    // console.log(changes);
    console.log('ngOnChanges called'+ changes.SomeValue.currentValue);
  }

  ngOnInit(): void {
    console.log('ngOnInit called...');
  }

}


----------------------------------------------------------------------------------------------

last check: component destruction phase



import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input() SomeValue?='sunora'

  constructor() {
    console.log('constructor called...');
   }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called...');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called...');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called...');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called...');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called...');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges called...');
    // console.log(changes);
    console.log('ngOnChanges called'+ changes.SomeValue.currentValue);
  }

  ngOnInit(): void {
    console.log('ngOnInit called...');
  }

}




<p>Parent Component html</p>
<input type="text" placeholder="Text here" #inputvalue/><br/><br/>
<button (click)="submitValues(inputvalue)">HIT</button><br/><br/>
<app-child *ngIf="ComponentDestroy" [SomeValue]="value">This is added for checking ngAfterContentInitCheck {{value}}</app-child>

<button (click)="destroy()" style="background-color: red;">Destroy Component</button>






