import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';


@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers(){
    return this.http.get(environment.usersResource)
           .map((response: Response) => response.json())
           .catch(this.errorHandler);
  }

  private errorHandler(error: Response){
      console.error(error);
      return Observable.throw(error);
  }

}
