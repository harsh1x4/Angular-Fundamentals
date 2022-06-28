import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {

    console.log("User Input Value:"+this.route.snapshot.params['lang'])

    // this.route.paramMap.subscribe(value =>{
    //  console.log(value.get('lang'));
  // })

 }
}
