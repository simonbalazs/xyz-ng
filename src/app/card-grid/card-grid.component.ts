import { Component, OnInit } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'card-grid',
  styleUrls: ['./card-grid.component.scss'],
  template: `
  <div *ngFor="let card of cards">
    <card [src]="card"></card>
  </div>`
})

export class CardGridComponent {
  
  constructor() { }
  
  cards: string[] = [
    '../assets/cards/card1.md',
    '../assets/cards/card2.md'
  ]
}
