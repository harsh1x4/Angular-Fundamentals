import { Component,OnInit } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title?:string;
  compAge?:number;

  constructor() {
    console.log("AppComponent Constructor executed....");
    this.title="lifecycle";
    this.compAge=8;
  }
  ngOnInit(): void {
    console.log('ngOnInit lifecycle hook executed..');
  }

  printComponentDetails(): void{
    console.log(this.title+"--"+this.compAge);
  }
 
}
