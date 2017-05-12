import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor( private router: Router ){}

  canActivate(){
     if ( localStorage.getItem('id_session') != null && localStorage.getItem('id_session') != ''  ){
       return true;
     }
     this.router.navigate(['/login']);
     return false;
  }



}
