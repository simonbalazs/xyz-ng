import { Component, OnInit } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'card-grid',
  styleUrls: ['./card-grid.component.scss'],
  template: `
  <div class="card" *ngFor="let card of cards">
    <card [src]="card"></card>
  </div>`
})

export class CardGridComponent {
  
  constructor() { }
  
  cards: string[] = [
    '../assets/cards/kbp.md',
    '../assets/cards/dark-pattern.md',
    '../assets/cards/metset.md',
    // '../assets/cards/xyz.md',
    '../assets/cards/ash.md',
    '../assets/cards/hal9000.md',
    '../assets/cards/krajcar.md',
  ]
}
