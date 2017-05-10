import { fadeInAnimation } from '../shared/animations/fade-in.animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-about',
  template: `
    <div class="about-container" [@routeAnimation] = "routeAnimation">
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
    '.about-container{ max-width:800px; margin:0px auto; padding:15px; }'
  ],
  animations: [ fadeInAnimation ]
})
export class AboutComponent implements OnInit {

  routeAnimation: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
