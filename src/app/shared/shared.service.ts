import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  constructor(private router: Router) { }

  getCurrentUrl(){
    return this.router.url;
  }

}
