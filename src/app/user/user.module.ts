import { IntegerDirective } from '../shared/directives/integer.directive';
import { AlphanumericDirective } from '../shared/directives/alphanumeric.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../shared/guards/auth.guard';
import { UserService } from './user.service';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';

const userRoutes: Routes = [
  { 
    path: '', canActivate:[AuthGuard], children: [
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
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule
  ],
  declarations: [ 
    ListComponent, 
    CreateComponent,
    AlphanumericDirective,
    IntegerDirective
  ],
  providers: [ UserService, AuthGuard ]
})
export class UserModule { }
