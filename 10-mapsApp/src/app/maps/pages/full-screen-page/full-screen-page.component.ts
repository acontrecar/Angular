import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Map } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css'],
})
export class FullScreenPageComponent implements AfterViewInit {
  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) throw new Error('divMap is not defined');

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-6.1297519, 36.6843333], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
