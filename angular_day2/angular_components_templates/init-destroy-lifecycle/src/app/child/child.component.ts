import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked,OnDestroy{

  @Input() SomeValue?='sunora'

  constructor() {
    console.log('constructor called...');
   }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called...');
  }

  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked called...');
  // }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit called...');
  // }

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
