import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'gs-main-content',
  templateUrl: './main-content.component.html',
  styles: []
})
export class MainContentComponent implements OnInit {
  
  /* Layout variables */
  layout: object = {
    'page-header' : 'Titulo de la p&aacute;gina',
    'page-description' : 'Descripci&oacute;n de la p&aacute;gina'
  };


  constructor() { }

  ngOnInit() {
   
  }

}
