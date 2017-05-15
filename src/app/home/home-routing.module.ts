import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from './../shared/guards';

const homeRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent }
    ],
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(homeRoutes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule {}
