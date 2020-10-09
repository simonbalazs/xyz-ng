import { Component, OnInit } from '@angular/core';
import json from 'output/filelist.json';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  imgUrls: string[] = Array.of(json).flat();

}
