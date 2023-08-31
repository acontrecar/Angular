import { Component, ElementRef, ViewChild } from '@angular/core';

import { LngLat, Map, Marker } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

interface MarkerAndColor {
  color: string;
  colorText: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  colorText: string;
  lngLat: number[];
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'],
})
export class MarkersPageComponent {
  @ViewChild('map')
  public divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-6.1297519, 36.6843333);

  ngAfterViewInit(): void {
    if (!this.divMap) throw new Error('divMap is not defined');

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom
    });

    this.readFromLocalStorage();

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Antonio Contreras';

    // const marker = new Marker({
    //   element: markerHtml,
    // })
    //   .setLngLat(this.currentLngLat)
    //   .addTo(this.map);
  }

  createMarker() {
    if (!this.map) throw new Error('Map is not defined');

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    //funcion para calcular el color del texto
    const contrastColor = (c: string) =>
      ['#000', '#fff'][
        ~~(
          [0.299, 0.587, 0.114].reduce(
            (r, v, i) => parseInt(c.substr(i * 2 + 1, 2), 16) * v + r,
            0
          ) < 128
        )
      ];

    const colorText = contrastColor(color);

    const lngLat = this.map.getCenter();

    this.addMarker(lngLat, colorText, color);
  }

  addMarker(lngLat: LngLat, colorText: string, color: string) {
    if (!this.map) throw new Error('Map is not defined');

    const marker = new Marker({
      color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map);

    this.markers.push({ color, colorText, marker });
    this.saveToLocalStorage();

    marker.on('dragend', () => {
      this.saveToLocalStorage();
    });
  }

  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  flyTo(marker: Marker) {
    this.map?.flyTo({
      zoom: 15,
      center: marker.getLngLat(),
    });
  }

  saveToLocalStorage() {
    const plainMarkers: PlainMarker[] = this.markers.map(
      ({ color, colorText, marker }) => {
        return {
          color,
          colorText,
          lngLat: marker.getLngLat().toArray(),
        };
      }
    );

    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  readFromLocalStorage() {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);

    plainMarkers.forEach(({ color, colorText, lngLat }) => {
      const [lng, lat] = lngLat;
      const coords = new LngLat(lng, lat);

      this.addMarker(coords, colorText, color);
    });
  }
}
