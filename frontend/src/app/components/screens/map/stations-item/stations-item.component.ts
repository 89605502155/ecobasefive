import { Component, Input, OnInit } from '@angular/core';
import { IStation } from 'src/app/services/station/station.interface';

@Component({
  selector: 'app-stations-item',
  templateUrl: './stations-item.component.html',
  styleUrls: ['./stations-item.component.scss']
})
export class StationsItemComponent{

  @Input() station:IStation

}
