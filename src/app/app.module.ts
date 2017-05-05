import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { CoreComponent } from './core/core.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    CoreModule
  ],
  declarations: [],
  bootstrap: [ CoreComponent ]
})
export class AppModule { }
