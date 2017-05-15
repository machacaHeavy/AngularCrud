import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'user', loadChildren: './user/user.module#UserModule' },
      { path: 'about', loadChildren: './about/about.module#AboutModule' }
    ]
  },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: '404', loadChildren: './notfound/notfound.module#NotfoundModule' },
  { path: '**', redirectTo: '404' }
];



@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
