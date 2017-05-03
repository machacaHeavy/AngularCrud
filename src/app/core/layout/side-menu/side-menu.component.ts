import { SideMenuDirective } from './side-menu.directive';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Component, OnInit, SecurityContext } from '@angular/core';


@Component({
  selector: 'gs-side-menu',
  templateUrl: './side-menu.component.html',
  styles: []
})
export class SideMenuComponent implements OnInit {

  /* Layout variables */
  user: any = {
    name: 'Gildardo Solis'
  };



  appMenu: string;

  constructor(private sanitizer: DomSanitizer) {
     
   }
    
  ngOnInit() {
     let  menu = [
     {
      name: 'Home',
      path: '/home',
      subOptionCount: 0,
      subOption: {

      }
    },
     {
      name: 'Users',
      path: '/users',
      subOptionCount: 2,
      subOption: [
        {
          name: 'Create',
          path: '/users/create'
        },
        {
          name: 'List',
          path: '/users/list'
        },
        {
          name: 'Otro',
          path: '/users/otro'
        }
      ]
    },
     {
      name: 'About',
      path: '/about',
      subOptionCount: 0,
      subOption: {

      }
    }
  ];
  this.appMenu = this.createMenu(menu);
   
  }
ng
  createMenu(menu:Array<any>):string{

    let html      = '';

    for( let i=0; i<menu.length; i++ ){

      html += '<li>';
      html += '<a><i class="fa fa-link"></i><span></span>' + menu[i].name;

      if ( menu[i].subOption.length != 0 ){
        
        html += '<span class="pull-right-container">';
        html += '<i class="fa fa-angle-left pull-right"></i>';
        html += '</span>';
        html += '</a>';
        html += '<ul class="treeview-menu">';
        html += '<li><a href="#">Link in level 2</a></li>';
        html += '<li><a href="#">Link in level 2</a></li>';
        html += '</ul>';

      }
      else{
        html += '</a>'
      }

      html += '</li>';

    }

    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }



}
