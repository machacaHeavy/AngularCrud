import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';

@Injectable()
export class LayoutService {

  constructor( private http: Http) { }

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
