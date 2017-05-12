import { LoginGuard } from './shared/guards/login.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { LayoutComponent } from './core/layout/layout.component';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' }
  ]},
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: '404', loadChildren: './notfound/notfound.module#NotfoundModule',  },
  { path: '**', redirectTo: '404' }
];



@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  providers: [ ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
