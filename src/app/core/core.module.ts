import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { FooterComponent } from './layout/footer/footer.component';


const appRoutes: Routes = [
  { path: '', loadChildren: './../home/home.module#HomeModule' },
  { path: 'home', loadChildren: './../home/home.module#HomeModule'}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    LayoutComponent,
    TopBarComponent,
    SideMenuComponent,
    MainContentComponent,
    FooterComponent
  ],
  exports: [ ]
})
export class CoreModule { }
