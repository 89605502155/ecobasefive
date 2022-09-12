import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { IStation } from './station/station.interface';
import { LeafletPopupService } from './leaflet-popup.service';

@Injectable({
  providedIn: 'root'
})
export class LeafletstationsService {

  API_URL='http://localhost:3000/stations'
  stations: IStation[]=[]
  constructor(
    private http: HttpClient,
    private leafletPopup: LeafletPopupService
    ) { }

  makeStationMarkers(map: L.map): void {
    this.http.get<IStation[]>(this.API_URL).subscribe(data => {
      this.stations=data
      for(let i=0;i< this.stations.length;i++){
        const marker=L.marker([this.stations[i].lat,this.stations[i].lon])
        marker.bindPopup(this.leafletPopup.makeStationPopup(this.stations[i]))
        marker.addTo(map);
      }
    });
  }
}
