import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  styleUrls: ['./card.component.scss'],
  template: `
  <div>
    <markdown [src]="src"> </markdown>
  </div>`
})

export class CardComponent {

  @Input() src: string;

}
