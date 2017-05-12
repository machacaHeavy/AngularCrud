import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { AuthGuard } from './../shared/guards/auth.guard';

@NgModule({
  imports: [ SharedModule, HomeRoutingModule ],
  providers: [ AuthGuard ],
  declarations: [ HomeComponent ]
})
export class HomeModule {}
