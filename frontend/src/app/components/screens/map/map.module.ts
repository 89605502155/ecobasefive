import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { StationsItemComponent } from './stations-item/stations-item.component';
import { SearchComponent } from './search/search.component';
import { FiltersComponent } from './filters/filters.component';
import { StationsService } from 'src/app/services/stations.service';
import { RouterModule } from '@angular/router';
import { LeafletmapComponent } from './leafletmap/leafletmap.component';



@NgModule({
  declarations: [
    MapComponent,
    StationsItemComponent,
    SearchComponent,
    FiltersComponent,
    LeafletmapComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MapModule { }
