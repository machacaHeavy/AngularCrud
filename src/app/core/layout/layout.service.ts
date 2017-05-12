import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';

import { environment } from './../../../environments/environment';

@Injectable()
export class LayoutService {

  constructor( private http: Http ){ console.log('LayoutService instance...'); }

  getInfo(){
    return this.http.get(environment.infoResource)
           .map((response: Response) => response.json())
           .catch(this.errorHandler);
  }
  
  getMenu(){
    return this.http.get(environment.menuResource)
           .map((response: Response) => response.json())
           .catch(this.errorHandler);
  }

  private errorHandler(error: Response){
      console.error(error);
      return Observable.throw(error);
  }

}
