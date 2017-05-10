import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'gs-side-menu',
  templateUrl: './side-menu.component.html',
  styles: []
})
export class SideMenuComponent implements OnInit {

  /* Layout variables */
  @Input() user: any = {};
  @Input() menu: Array<any> = [];

  constructor(){
  }

  ngOnInit() {
    
  }

}
