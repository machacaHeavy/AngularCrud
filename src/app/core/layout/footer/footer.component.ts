import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  /* Footer variables */
  footer:object = {
    autor : 'José Gildardo Solis Sánchez',
    anio  : '2017'
  };

  constructor() { }

  ngOnInit() {
  }

}
