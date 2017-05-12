import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../../../login/login.service';


@Component({
  selector: 'gs-top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent implements OnInit {

  @Input() user: any = {};

  constructor(private login: LoginService, private router: Router) { }

  ngOnInit() {
  }
  
  logOut(){
    this.login.logOut();
    this.router.navigate(['/login']);
  }

}
