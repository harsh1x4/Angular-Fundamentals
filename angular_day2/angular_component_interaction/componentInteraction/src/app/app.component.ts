import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is the Parent Component';

   //step-1
  // parent component i.e.AppComponent will send it to the child component
  public location = "From AppComponent/ParentComponent";

  //For holding child message
  public messageFromChild = "";
}
