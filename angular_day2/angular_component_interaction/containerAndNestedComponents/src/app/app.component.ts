import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
                  <marquee scrollamount="15">
                     <h1>{{pageHeader}}</h1>
                  </marquee>
                    <list-student></list-student>
                    <marquee scrollamount="15">
                      <h1>{{pageFooter}}</h1>
                    </marquee>
               </div>`
})
export class AppComponent {
    pageHeader: string = 'Student Information';
    pageFooter: string = 'Student Dashboard';

}