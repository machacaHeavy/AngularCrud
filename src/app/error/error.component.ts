import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-error',
  template: `
    <p>
      error Works!
    </p>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
