import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './core/layout/layout.component';


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
