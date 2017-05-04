import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './core/layout/layout.component';
import { NgModule } from '@angular/core';





@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    CoreModule,
    SharedModule
  ],
  declarations: [  ],
  bootstrap: [ LayoutComponent ]
})
export class AppModule { }
