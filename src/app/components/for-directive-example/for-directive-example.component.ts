import { Component } from '@angular/core';
import { PersonTableComponent } from '../person-table/person-table.component';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
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
