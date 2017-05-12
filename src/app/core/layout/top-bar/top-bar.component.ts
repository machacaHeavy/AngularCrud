import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gs-top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent implements OnInit {

  @Input() user: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  private logOut():void{
    this.router.navigate(['/logout']);
  }


}
