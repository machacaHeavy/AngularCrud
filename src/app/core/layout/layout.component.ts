import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-layout',
  template: `
    <div class="wrapper">
      <gs-top-bar></gs-top-bar>
      <gs-side-menu></gs-side-menu>
      <gs-main-content></gs-main-content>
      <gs-footer></gs-footer>
    </div>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
   
  }

}
