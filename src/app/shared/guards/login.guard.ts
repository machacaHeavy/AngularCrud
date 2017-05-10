import { LoginService } from '../../login/login.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class LoginGuard implements CanActivate{

  constructor(private router: Router, private ls: LoginService){}

  canActivate(){
    if ( this.ls.isLoggedIn() )
    {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }

  
}
