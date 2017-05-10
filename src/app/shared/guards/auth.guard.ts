import { LoginService } from '../../login/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, private ls: LoginService){}

  canActivate(){
     if ( this.ls.isLoggedIn() ){
       return true;
     }
     this.router.navigate(['/login']);
     return false;
  }



}
