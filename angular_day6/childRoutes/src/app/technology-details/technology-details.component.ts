import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-technology-details',
  templateUrl: './technology-details.component.html',
  styleUrls: ['./technology-details.component.css']
})
export class TechnologyDetailsComponent implements OnInit {
  public techid?:string | any;
  constructor(private route:ActivatedRoute, private router:Router) { }


// part-1

  // ngOnInit() {
  //   let id = String(this.route.snapshot.paramMap.get("tid"));
  //   this.techid=id;
  // }

  // back(){
  //   let previousId:any = this.techid - 1;
  //   this.router.navigate(['/technology', previousId]);
  // }

  // next(){
  //   let nextId:any = this.techid + 1;
  //   this.router.navigate(['/technology', nextId]);
  // }





//part-2

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = String(params.get('tid'));
      let myId = parseInt(id);
      this.techid=myId;
    });
  }

  back(){
    let previousId:any = this.techid - 1;
    this.router.navigate(['/technology', previousId]);
  }

  next(){
    let nextId:any = this.techid + 1;
    this.router.navigate(['/technology', nextId]);
  }


  
  getSummary(){
    this.router.navigate(['summary'],{relativeTo: this.route});
  }

  getTrainingCost(){
    this.router.navigate(['trainingcost'],{relativeTo: this.route});
  }

}




