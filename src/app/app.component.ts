import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>This is {{title}}!</h1>
    <app-list></app-list>
  `,
})
export class AppComponent {
  title = 'Hand Crafted';
}
