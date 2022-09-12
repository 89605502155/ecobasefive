import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/ui/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/ui/layout/header/header.module';
import { LayoutModule } from './components/ui/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { MapModule } from './components/screens/map/map.module';
import { LeafletstationsService } from './services/leafletstations.service';
import { LeafletPopupService } from './services/leaflet-popup.service';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HeaderModule,
    HttpClientModule,
    MapModule,
    GraphQLModule
  ],
  providers: [
    LeafletstationsService,
    LeafletPopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
