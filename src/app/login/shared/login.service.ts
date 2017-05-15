import { Injectable } from '@angular/core';

import { AuthService } from './../../core/services';
import { Login } from './login.model';

@Injectable()
export class LoginService{

  constructor( private auth: AuthService ){}

  logIn( user: Login ): boolean {

    return this.auth.logIn(user.getUserName());

  }

}
