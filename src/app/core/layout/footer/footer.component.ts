import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gs-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  @Input() footer: any = {};

  constructor() { }

  ngOnInit() {
  }

}
