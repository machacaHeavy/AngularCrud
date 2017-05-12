import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LoginRouteGuard implements CanActivate {
  
  constructor( private router: Router ){}

  canActivate(){

     if ( localStorage.getItem('id_session') != null && localStorage.getItem('id_session') != '' ){
        this.router.navigate(['/home']);
        return false;
     }
     return true;
     
  }


}
