import { Injectable } from '@angular/core';


@Injectable()
export class LoginService {

  constructor() { }

  loggIn(user){
    localStorage.setItem('id_session', user);
    
  }

  logOut(){
    localStorage.removeItem('id_session');
    localStorage.clear();
  }

  isLoggedIn(){
    
    if ( localStorage.getItem('id_session') != null && localStorage.getItem('id_session') != '' )
    {
      return true;
    }
    return false;
  }

}
