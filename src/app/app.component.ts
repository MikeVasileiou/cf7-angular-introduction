import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-introduction';
  name = 'Mike';

  person = {
    givenName: 'Mike',
    surName: 'Vasileiou',
    age:37,
    email: "mike@yahoo.gr"
  }
}
