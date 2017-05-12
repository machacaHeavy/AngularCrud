import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutService } from './layout/layout.service';
import { AuthService } from './services/auth.service';

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
  providers: [ 
    LayoutService, 
    AuthService 
  ],
  exports: [ LayoutComponent ]

})
export class CoreModule { }
