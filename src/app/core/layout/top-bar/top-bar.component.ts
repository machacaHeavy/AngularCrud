import { Router } from '@angular/router';
import { LoginService } from '../../../login/login.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gs-top-bar',
  templateUrl: './top-bar.component.html',
  styles: []
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
