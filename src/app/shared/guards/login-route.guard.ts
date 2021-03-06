import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './../../core/services';

@Injectable()
export class LoginRouteGuard implements CanActivate {

  constructor( private router: Router, private auth: AuthService ){}

  canActivate(): boolean {

     if ( this.auth.isLoggedIn() ){
        this.router.navigate(['/home']);
        return false;
     }
     return true;

  }


}
