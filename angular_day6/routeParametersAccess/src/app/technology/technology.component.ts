import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

technologies = [
  {"tid":1,"name":"JAVA", "creator":"SUN MICROSYSTEMS","year":1990},
  {"tid":2,"name":".NET", "creator":"MICROSOFT","year":2000},
  {"tid":3,"name":"ANGULAR", "creator":"GOOGLE","year":2010},
  {"tid":4,"name":"JAVASCRIPT", "creator":"NETSCAPE","year":1995},
]

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }


  onSelectTechnology(tech:any){
    //  url framed will be: ... /technologydetails/tid
    this.router.navigate(['/technology',tech.tid]);

    // for relative navigation
    //this.router.navigate([tech.tid],{relativeTo:this.route});

  }

}
