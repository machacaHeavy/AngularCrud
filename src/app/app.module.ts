import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [],
  bootstrap: [ LayoutComponent ]
})
export class AppModule { }
