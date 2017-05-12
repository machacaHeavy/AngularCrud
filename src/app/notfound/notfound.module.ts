import { NgModule } from '@angular/core';

import { NotfoundRoutingModule } from './notfound-routing.module';
import { SharedModule } from './../shared/shared.module';

import { NotfoundComponent } from './notfound.component';


@NgModule({
  imports: [ SharedModule, NotfoundRoutingModule ],
  declarations: [NotfoundComponent]
})
export class NotfoundModule {}
