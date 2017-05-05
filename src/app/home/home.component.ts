import { fadeInAnimation, slideInAnimation } from '../core/layout/layout.animation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'gs-home',
  template: `
  <div class="home-container" [@routeAnimation] = "routeAnimation">
    <div class="jumbotron">
      <div class="container">
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>
  `,
  styles: [
    '.home-container{ max-width:800px; margin:0px auto; padding:15px; }'
  ],
  animations: [ fadeInAnimation ]
})
export class HomeComponent implements OnInit {

  routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }



}
