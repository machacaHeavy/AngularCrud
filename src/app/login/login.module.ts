import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from './../shared/shared.module';

import { LoginComponent } from './login.component';
import { LoginRouteGuard } from './../shared/guards';
import { LoginService } from './shared/login.service';

@NgModule({
  imports: [ SharedModule, LoginRoutingModule ],
  providers: [ LoginRouteGuard, LoginService ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
