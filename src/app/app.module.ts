import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './shared/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './../home/home.module#HomeModule'},
  { path: 'user', loadChildren: './../user/user.module#UserModule'},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [  ],
  bootstrap: [ LayoutComponent ]
})
export class AppModule { }
