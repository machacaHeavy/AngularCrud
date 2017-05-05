import { UserService } from '../user.service';
import { fadeInAnimation, slideInAnimation } from '../../core/layout/layout.animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-list',
  templateUrl: './list.component.html',
  styles: [
    '.list-container{ max-width:100%; padding:15px; border-radius:5px; margin:0px auto; background-color:rgba(255,255,255,0.5); border:1px solid rgba(0,0,0,0.1); overflow-x:auto;}',
    '.list-container>table>tbody tr:hover{ cursor: pointer; }'
  ],
  animations: [ slideInAnimation ]
})
export class ListComponent implements OnInit {

  routeAnimation: boolean = true;
  list: any = {};

  constructor(private us: UserService){ }

  ngOnInit() {
    this.getList();   
  }
  
  private getList(){
    this.us.getUsers().subscribe(
      (listResponseSuccess) => this.list = listResponseSuccess,
      (listResponseError)   => console.log(listResponseError)
    );
  }


}
