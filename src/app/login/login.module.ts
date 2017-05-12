import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { LoginRouteGuard } from './../shared/guards/login-route.guard';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  providers: [ LoginRouteGuard ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
