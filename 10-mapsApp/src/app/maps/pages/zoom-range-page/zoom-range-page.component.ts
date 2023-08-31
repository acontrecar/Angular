import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

import { LngLat, Map } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css'],
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map')
  public divMap?: ElementRef;

  public zoomLevel: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(
    6.140614806588928,
    36.690143622209334
  );

  ngAfterViewInit(): void {
    if (!this.divMap) throw new Error('divMap is not defined');

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoomLevel, // starting zoom
    });

    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListeners() {
    if (!this.map) throw new Error('map is not defined');

    this.map.on('zoom', (ev) => {
      this.zoomLevel = this.map!.getZoom() || 0;
    });

    this.map.on('zoomend', (ev) => {
      if (this.map!.getZoom() <= 18) return;
      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
    });
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomChanged(value: string) {
    this.zoomLevel = Number(value);
    this.map?.zoomTo(this.zoomLevel);
  }
}
