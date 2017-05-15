import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';

@Injectable()
export class AuthService {

  constructor() { console.log('AuthService instance...'); }

  logIn(user:string): boolean {

    if ( user !== null && user !== '' && environment.sessionName !== null && environment.sessionName !== '' )
    {
      localStorage.setItem(environment.sessionName, user);
      return true;
    }
    return false;

  }

  logOut(): boolean {

    if ( environment.sessionName !== null && environment.sessionName !== '' )
    {
      localStorage.removeItem(environment.sessionName);
      localStorage.clear();
      return true;
    }
    return false;

  }

  isLoggedIn(): boolean {

    if ( environment.sessionName !== null && environment.sessionName !== '' )
    {
      if ( localStorage.getItem(environment.sessionName) !== null && localStorage.getItem(environment.sessionName) !== '' ){
        return true;
      }
    }
    return false;

  }

}
