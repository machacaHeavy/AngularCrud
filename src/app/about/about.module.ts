import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from './../shared/shared.module';

import { AboutComponent } from './about.component';
import { AuthGuard } from './../shared/guards/auth.guard';

@NgModule({
  imports: [ SharedModule, AboutRoutingModule ],
  providers: [ AuthGuard ],
  declarations: [ AboutComponent ]
})
export class AboutModule {}
