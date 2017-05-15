import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './../../core/services';

@Injectable()
export class LogoutRouteGuard implements CanActivate {

  constructor( private router: Router, private auth: AuthService ){}

  canActivate(): boolean{
     if ( this.auth.isLoggedIn() ){
       return true;
     }
     this.router.navigate(['/login']);
     return false;
  }


}
