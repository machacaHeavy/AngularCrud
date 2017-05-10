import { LoginService } from '../login/login.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutService } from './layout/layout.service';

@NgModule({
  imports: [ 
    CommonModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    TopBarComponent,
    SideMenuComponent,
    MainContentComponent,
    FooterComponent,
    LayoutComponent
  ],
  providers: [ LayoutService, LoginService ],
  exports: [ 
    TopBarComponent,
    SideMenuComponent,
    MainContentComponent,
    FooterComponent,
    LayoutComponent
  ]

})
export class CoreModule { }
