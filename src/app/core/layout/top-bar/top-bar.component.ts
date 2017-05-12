import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'gs-top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent implements OnInit {

  @Input() user: any = {};

  constructor(private router: Router, private as: AuthService) { }

  ngOnInit() {
  }
  
  private logOut():void{
    this.as.logOut();
    this.router.navigate(['/login']);
  }


}
