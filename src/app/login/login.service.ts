import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  loggIn(user){
    localStorage.setItem('id', user);
    
  }

  logOut(){
    localStorage.removeItem('id');
    localStorage.clear();
  }

  isLoggedIn(){
    
    if ( localStorage.getItem('id') != null && localStorage.getItem('id') != '' )
    {
      return true;
    }
    return false;
  }

}
