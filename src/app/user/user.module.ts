import { UserService } from './user.service';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';

const userRoutes: Routes = [
  { 
    path: '', children: [
      { 
        path: ''
      },
      { 
        path: 'list', component: ListComponent 
      },
      {
        path: 'create', component: CreateComponent
      }
    ]  
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [ 
    ListComponent, 
    CreateComponent 
  ],
  providers: [ UserService ]
})
export class UserModule { }
