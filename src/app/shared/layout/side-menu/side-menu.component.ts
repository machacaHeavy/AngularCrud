import { InfoApi } from '../../../api/info.api';
import { MenuApi } from './../../../api/menu.api';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'gs-side-menu',
  templateUrl: './side-menu.component.html',
  styles: []
})
export class SideMenuComponent implements OnInit {

  /* Layout variables */
  user: any;
  menu: any;

  constructor() {}
    
  ngOnInit() {
    this.menu = MenuApi;
    this.user = InfoApi;
 
  }



}
