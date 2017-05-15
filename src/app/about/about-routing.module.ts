import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { AuthGuard } from './../shared/guards';

const aboutRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AboutComponent }
    ],
    canActivate: [ AuthGuard ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild(aboutRoutes) ],
  exports: [ RouterModule ]
})
export class AboutRoutingModule {}
