import { fadeInAnimation } from '../shared/animations/fade-in.animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-notfound',
  template: `
  <div class="notfound-container" [@routeAnimation] = "routeAnimation">

        <h1>No Encontrado</h1>
        <p>La p&aacute;gina solicitada no existe</p>
        <button routerLink="/home" class="btn btn-warning btn-sm">Regresar</button>

  </div>
  `,
  styles: [`
    .notfound-container{
      max-width:600px;
      margin: 0 auto;
      border-radius:5px;
      border:1px solid rgba(0,0,0,0.1);
      position: relative;
      top:200px;
      padding:30px;
    }
    body{
      background-color:rgba(0,0,0,0.02);
    }
  `],
  animations: [ fadeInAnimation ]
})
export class NotfoundComponent implements OnInit {

  routeAnimation: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
