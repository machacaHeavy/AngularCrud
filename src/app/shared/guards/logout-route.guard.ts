import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LogoutRouteGuard implements CanActivate {
  
  constructor( private router: Router ){}

  canActivate(){
     if ( localStorage.getItem('id_session') != null && localStorage.getItem('id_session') != '' ){
       return true;
     }
     this.router.navigate(['/login']);
     return false;
  }


}
