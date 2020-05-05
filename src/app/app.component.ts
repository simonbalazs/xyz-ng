import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <router-outlet></router-outlet>
  <card-grid></card-grid>`
})

export class AppComponent {
  title = 'xyz-ng';
}
