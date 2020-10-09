import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgUrls: string[] = [
    '../assets/pic/P1170652.jpeg',
    '../assets/pic/P1160712.jpeg',
    '../assets/pic/IMG_7272.jpeg',
    '../assets/pic/31900004.jpeg',
  ]
}
