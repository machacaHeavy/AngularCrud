import { Router, NavigationEnd } from '@angular/router';
import { LayoutComponent } from '../layout.component';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'gs-main-content',
  templateUrl: './main-content.component.html',
  styles: []
})
export class MainContentComponent implements OnInit {

  appRoutes: Array<string> = [];

  constructor(private router: Router){}

  ngOnInit() {
    this.getAppRoutes();
  }

  private getAppRoutes(){
    this.router.events.subscribe(
       (r) => {
         if ( r instanceof NavigationEnd){
            this.appRoutes = this.routesToArray(r.urlAfterRedirects);
         }
       } 
     );
  }

  private routesToArray(url: string): Array<string>{
      
      let arrayUrl = <string[]> url.split('/');
      let arrayResult = <string[]> [];
      for( let i = 1; i < arrayUrl.length; i++ ){

        if ( arrayUrl[i] !== '' ){
          arrayResult[i-1] = arrayUrl[i];
        }

      }

      return arrayResult;

  }

}
