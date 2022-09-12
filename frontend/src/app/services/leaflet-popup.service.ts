import { Injectable } from '@angular/core';
import { IStation } from './station/station.interface';

@Injectable({
  providedIn: 'root'
})
export class LeafletPopupService {

  constructor() { }

  makeStationPopup(data:IStation){
    let str1=`Nane: ${ data.name }  Latitude: ${ data.lat } Longitude: ${ data.lon }<br>`
    for(let i=0;i<data.depths.length;i++){
      str1+=`Depth: ${data.depths[i].depth.toFixed(2)}  `+
        `Salinity: ${data.depths[i].salinity.toFixed(1)}  `+
        `DOC: ${data.depths[i].DOC.toFixed(2)}<br>`
    }

    return str1
  }
}
