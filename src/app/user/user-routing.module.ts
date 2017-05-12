import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from './../shared/guards/auth.guard';

const userRoutes: Routes = [
  { 
    path: '', 
    children: [
      { path: '' },
      { path: 'list', component: ListComponent },
      { path: 'create', component: CreateComponent }
    ],
    canActivate: [ AuthGuard ] 
  }
];

@NgModule({
  imports: [ RouterModule.forChild(userRoutes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {}
