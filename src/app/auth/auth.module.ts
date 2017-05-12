import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [ SharedModule, AuthRoutingModule ],
  declarations: [LoginComponent, LogoutComponent]
})
export class AuthModule { }
