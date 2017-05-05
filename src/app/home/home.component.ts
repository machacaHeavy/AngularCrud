import { fadeInAnimation, slideInAnimation } from '../core/layout/layout.animation';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'gs-home',
  template: `
  <div [@routeAnimation] = "routeAnimation">
    <div class="jumbotron">
      <div class="container">
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>
  `,
  styles: [],
  animations: [ fadeInAnimation ]
})
export class HomeComponent implements OnInit {

  //@HostBinding('@routeAnimation') routeAnimation = true;
  routeAnimation = true;

  constructor(private router: Router) { }

  ngOnInit() {

  }



}
