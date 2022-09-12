import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/screens/map/map.component';
import { HomeComponent } from './components/screens/home/home.component';
import { ExpeditionsComponent } from './components/screens/expeditions/expeditions.component';

const routes: Routes = [
{
  path:'',
  component: MapComponent
},
{
  path:'home',
  component: HomeComponent
},
{
  path:'expeditions',
  component: ExpeditionsComponent
},
{
  path:'**',
  redirectTo:''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
