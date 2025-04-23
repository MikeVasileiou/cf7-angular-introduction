import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  // imports: [PersonTableComponent, EventBindExampleComponent],
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-introduction';
  name = 'Mike';


  // Step 1: One way bidning of data
  person = {
    givenName: 'Mike',
    surName: 'Vasileiou',
    age:37,
    email: "mike@yahoo.gr"
  }

  // Step 3: Component Input
  person0: Person = {
    givenName: "Christodoulos",
    surName:"Fragkoudakis",
    age: 55,
    email: "chfrag@aueb.gr",
    address:" Athens, Greece"
  }

  person1: Person = {
    givenName: "John",
    surName: "Doe",
    age: 32,
    email: "jdoe@example.com",
    address: 'New York, USA'
  }

  users: Person[] = [
  {
    "givenName": "Mil",
    "surName": "Olivello",
    "email": "molivello0@bloglovin.com",
    "age": 1,
    "address": "Apt 1131"
  }, {
    "givenName": "Lyndsey",
    "surName": "Laurent",
    "email": "llaurent1@vinaora.com",
    "age": 2,
    "address": "Room 278"
  }, {
    "givenName": "Katti",
    "surName": "Whitelaw",
    "email": "kwhitelaw2@cnbc.com",
    "age": 3,
    "address": "18th Floor"
  }, {
    "givenName": "Cairistiona",
    "surName": "Edgeson",
    "email": "cedgeson3@vinaora.com",
    "age": 4,
    "address": "PO Box 86986"
  }, {
    "givenName": "Nicola",
    "surName": "Hendricks",
    "email": "nhendricks4@msn.com",
    "age": 5,
    "address": "Room 1948"
  }, {
    "givenName": "Stephanie",
    "surName": "Stangroom",
    "email": "sstangroom5@fda.gov",
    "age": 6,
    "address": "12th Floor"
  }, {
    "givenName": "Reuven",
    "surName": "Schaben",
    "email": "rschaben6@yellowpages.com",
    "age": 7,
    "address": "Room 303"
  }, {
    "givenName": "Vere",
    "surName": "La Batie",
    "email": "vlabatie7@squidoo.com",
    "age": 8,
    "address": "2nd Floor"
  }
]
}
