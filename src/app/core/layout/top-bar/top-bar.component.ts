import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gs-top-bar',
  templateUrl: './top-bar.component.html',
  styles: []
})
export class TopBarComponent implements OnInit {

  @Input() user: any = {};

  constructor() { }

  ngOnInit() {
  }

}
