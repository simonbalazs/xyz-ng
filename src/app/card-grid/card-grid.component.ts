import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent {
  
  constructor() { }
  
  cards: string[] = [
    '../assets/cards/card1.md',
    '../assets/cards/card2.md'
  ]
}
