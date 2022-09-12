import { Component, OnInit } from '@angular/core';
import { IMenuItem } from './header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nameOfSite="russian north ecology base";
  menuItems:IMenuItem[]=[
    {
      path:'/home',
      icon: 'home',
      name: 'home'
    },{
      path:'/',
      icon: 'room',
      name: 'map'
    },{
      path:'/expeditions',
      icon: 'data_usage',
      name: 'expeditions'
    }
  ]

  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
