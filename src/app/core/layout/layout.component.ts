import { LayoutService } from './layout.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'gs-layout',
  template: `
    <div class="wrapper">
      <gs-top-bar [user] = "info"></gs-top-bar>
      <gs-side-menu [user] = "info" [menu] = "menu"></gs-side-menu>
      <gs-main-content></gs-main-content>
      <gs-footer [footer] = "info"></gs-footer>
    </div>
  `,
  styles: []
})
export class LayoutComponent implements OnInit{
  
  info = [];
  menu = [];

  constructor(private ls: LayoutService) {

  }

  ngOnInit(){
      this.getInfo();
      this.getMenu();
  }

  getInfo(){
    this.ls.getInfo().subscribe(
        (infoResponseSuccess) => this.info = infoResponseSuccess,
        (infoResponseError)   => console.log(infoResponseError)
    );
  }

  getMenu(){
    this.ls.getMenu().subscribe(
      (menuResponseSuccess) => this.menu = menuResponseSuccess,
      (menuResponseError)   => console.log(menuResponseError)
    );
  }



}
