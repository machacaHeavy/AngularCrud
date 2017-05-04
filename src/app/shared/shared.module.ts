import { LayoutComponent } from './../core/layout/layout.component';
import { FooterComponent } from './../core/layout/footer/footer.component';
import { MainContentComponent } from './../core/layout/main-content/main-content.component';
import { SideMenuComponent } from './../core/layout/side-menu/side-menu.component';
import { TopBarComponent } from './../core/layout/top-bar/top-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LayoutComponent,
    TopBarComponent,
    SideMenuComponent,
    MainContentComponent,
    FooterComponent
  ],
  exports:[ LayoutComponent ]
})
export class SharedModule { }
