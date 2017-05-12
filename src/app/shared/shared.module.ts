import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlphanumericDirective } from './directives/alphanumeric.directive';
import { IntegerDirective } from './directives/integer.directive';
import { StringDirective } from './directives/string.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    AlphanumericDirective,
    IntegerDirective,
    StringDirective
  ],
  exports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    AlphanumericDirective,
    IntegerDirective,
    StringDirective
  ]
})
export class SharedModule {}
