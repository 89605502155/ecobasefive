import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IStation } from 'src/app/services/station/station.interface';
import { StationsService } from 'src/app/services/stations.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  stations: IStation[]=[]

  constructor(private stationServece:StationsService) { }

  ngOnInit(): void {
    this.stationServece.getAll().subscribe(data => {
      this.stations=data
    })
  }

}
