import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from './../shared/guards/auth.guard';
import { UserService } from './user.service';

@NgModule({
  imports: [ SharedModule, UserRoutingModule ],
  declarations: [ ListComponent, CreateComponent ],
  providers: [ UserService, AuthGuard ]
})
export class UserModule { }
