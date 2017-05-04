import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './../home/home.module#HomeModule'},
  { path: 'user', loadChildren: './../user/user.module#UserModule'},
  { path: '**', redirectTo: 'home'}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  declarations: [],
  exports: [ RouterModule ]

})
export class CoreModule { }
