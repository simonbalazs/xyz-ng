import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <router-outlet></router-outlet>
  <contact></contact>
  <card-grid></card-grid>`
})

export class AppComponent {
  title = 'xyz-ng';
}
