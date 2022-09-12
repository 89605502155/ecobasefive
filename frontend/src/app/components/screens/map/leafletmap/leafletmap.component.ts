import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { IStation } from 'src/app/services/station/station.interface';
import { LeafletstationsService } from 'src/app/services/leafletstations.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-leafletmap',
  templateUrl: './leafletmap.component.html',
  styleUrls: ['./leafletmap.component.scss']
})
export class LeafletmapComponent implements AfterViewInit {

  private map;
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 54,90 ],
      zoom: 7
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }

  constructor(private leafletstationsService: LeafletstationsService) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.leafletstationsService.makeStationMarkers(this.map);
  }
}
