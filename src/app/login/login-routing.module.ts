import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginRouteGuard } from './../shared/guards/login-route.guard';

const loginRoutes: Routes = [
  { path: '', component: LoginComponent, canActivate: [ LoginRouteGuard ] }
];

@NgModule({
  imports: [ RouterModule.forChild(loginRoutes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule { }
