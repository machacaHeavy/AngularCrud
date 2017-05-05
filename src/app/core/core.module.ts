import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { LayoutService } from './layout/layout.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './../home/home.module#HomeModule'},
  { path: 'user', loadChildren: './../user/user.module#UserModule'},
  { path: 'about', loadChildren: './../about/about.module#AboutModule'},
  { path: '**',  loadChildren: './../notfound/notfound.module#NotfoundModule'}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserAnimationsModule
  ],
  declarations: [
    TopBarComponent,
    SideMenuComponent,
    MainContentComponent,
    FooterComponent,
    LayoutComponent
  ],
  providers: [ LayoutService],
  exports: [ LayoutComponent ]

})
export class CoreModule { }
