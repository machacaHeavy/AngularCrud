import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
