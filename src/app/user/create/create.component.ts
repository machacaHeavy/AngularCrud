import { slideInAnimation } from '../../core/layout/layout.animation';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'gs-create',
  templateUrl: './create.component.html',
  styles: [ '.create-container{ max-width:600px; padding:15px; border-radius:5px; margin:0px auto; background-color:rgba(255,255,255,0.5); border:1px solid rgba(0,0,0,0.1); }' ],
  animations: [ slideInAnimation ]
})
export class CreateComponent implements OnInit {

  //@HostBinding('@routeAnimation') routeAnimation = true;
  routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
