import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class LoginGuard implements CanActivate{

  constructor(private router: Router){}

  canActivate(){
    if ( this.isLoggedIn() )
    {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }

  isLoggedIn(){
    
    if ( localStorage.getItem('id_session') != null && localStorage.getItem('id_session') != '' )
    {
      return true;
    }
    return false;
  }

  
}
