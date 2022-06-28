import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'styleBinding';
  // fontSize: number = 10;
  // colorName="green";  


  // setting multiple inline styles

  fontSize: number = 80;  
  fontColor: string = "red";  
  IsBold: boolean = true;  
  IsItalic: boolean = true  
  textCenter: string = "center";  
  
  MultipleInlineStyle() {  
    let myStyleClass = {  
      'font-weight': this.IsBold ? 'bold' : 'normal',  
      'font-style': this.IsItalic ? 'italic' : 'normal',  
      'font-size.px': this.fontSize,  
      'color': this.fontColor,  
      'text-align': this.textCenter  
    };  
    return myStyleClass;  
  } 
}
