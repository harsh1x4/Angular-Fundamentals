import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'message-info',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

 @Input() public message:string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
