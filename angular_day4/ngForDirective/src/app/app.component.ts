import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngForDirective';

      users = [
                { firstName: 'Frank', lastName: 'Murphy'},
                { firstName: 'Vic', lastName: 'Reynolds' },
                { firstName: 'Mahi', lastName: 'Jabowski' },
                { firstName: 'Viyana', lastName: 'Glaser' },
                { firstName: 'Nyra', lastName: 'Bilzerian' }
          ];
}
