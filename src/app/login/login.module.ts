import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from './../shared/shared.module';

import { LoginComponent } from './login.component';
import { LoginGuard } from './../shared/guards/login.guard';
import { LoginService } from './login.service';

@NgModule({
  imports: [ SharedModule, LoginRoutingModule ],
  providers: [ LoginService, LoginGuard ],
  declarations: [ LoginComponent ]
})
export class LoginModule {}
