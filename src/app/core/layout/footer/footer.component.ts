import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gs-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  /* Footer variables */
  @Input() footer = [];

  constructor() { }

  ngOnInit() {
  }

}
