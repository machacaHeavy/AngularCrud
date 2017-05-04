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
    this.menu = [];
    this.user = [];
 
  }



}
