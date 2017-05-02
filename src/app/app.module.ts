import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './core/layout/layout.component';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    CoreModule
  ],
  declarations: [],
  bootstrap: [ LayoutComponent ]
})
export class AppModule { }
