import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gs-side-menu',
  templateUrl: './side-menu.component.html',
  styles: []
})
export class SideMenuComponent implements OnInit {

  /* Layout variables */
  @Input() user = [];
  @Input() menu = [];

  constructor(){
  }

  ngOnInit() {
    
  }



}
