import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public _model: any ={};
  public _source: Array<any>;

  constructor(private _service: AppService){
    this._source = this._service.returnStudentData(); 
  }

  ngOnInit(): void {
  }

  public submit(): void{
    if(this.validate()){
      this._service.addStudentData(this._model);
      this.reset();
    }
  }

  public reset():void{
    this._model = {};
  }


  private validate():boolean{
    let status: boolean = true;

    if(typeof(this._model.name) === "undefined"){
      alert("Name is Blank");
      status=false;
     return status;
    }

    else if(typeof(this._model.age) === "undefined"){
      alert("Age is Blank");
      status=false;
      return status;
    }

    else if(typeof(this._model.city) === "undefined"){
      alert("City is Blank");
      status=false;
      //return;
    }

    else if(typeof(this._model.dob) === "undefined"){
      alert("DOB is Blank");
      status=false;
      //return;
    }

    return status;
  }
  
}// end of AppComponent






