import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <ol>
      <li *ngFor="let name of names">{{name}}</li>
    </ol>
  `
})
export class ListComponent {
  names = [
    'Doug',
    'Susan',
    'Katie',
    'Kellie',
    'Andrew',
    'Matthew',
    'Michael'
  ];
}
