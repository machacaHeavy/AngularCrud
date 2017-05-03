import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'gs-main-content',
  templateUrl: './main-content.component.html',
  styles: []
})
export class MainContentComponent implements OnInit {
  

  pathNames: Array<string>;
  constructor() { }

  ngOnInit() {
     this.pathNames = this.getPathNames(document.location.pathname=='/'? '/home' : document.location.pathname);
  }

  getPathNames(pathname : string): Array<string> {

    let splitPath = pathname.split('/');
    let arrayResult = [];

    for( let i=1; i<splitPath.length; i++ ){
      arrayResult[i-1] = splitPath[i];
    }

    return arrayResult;

  }

}
