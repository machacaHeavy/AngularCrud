import { Component, OnInit } from '@angular/core';

import { LayoutService } from './layout.service';

declare var $:any;

@Component({
  selector: 'gs-layout',
  template: `
      <gs-top-bar [user] = "info"></gs-top-bar>
      <gs-side-menu [user] = "info" [menu] = "menu"></gs-side-menu>
      <gs-main-content></gs-main-content>
      <gs-footer [footer] = "info"></gs-footer> 
  `
})
export class LayoutComponent implements OnInit{
  
  info: any = {};
  menu: Array<any> = [];
  
  constructor(private ls: LayoutService){ console.log('LayoutComponent instance...'); }

  ngOnInit(){
      $.AdminLTE.layout.activate();
      this.getInfo();
      this.getMenu();
  }

  private getInfo(){
    this.ls.getInfo().subscribe(
        (infoResponseSuccess) => this.info = infoResponseSuccess,
        (infoResponseError)   => console.log(infoResponseError)
    );
  }

  private getMenu(){
    this.ls.getMenu().subscribe(
      (menuResponseSuccess) => this.menu = menuResponseSuccess,
      (menuResponseError)   => console.log(menuResponseError)
    );
  }

}
