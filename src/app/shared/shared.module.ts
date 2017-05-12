import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { StringDirective } from './directives/string.directive';
import { IntegerDirective } from './directives/integer.directive';
import { AlphanumericDirective } from './directives/alphanumeric.directive';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AlphanumericDirective,
    IntegerDirective,
    StringDirective
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AlphanumericDirective,
    IntegerDirective,
    StringDirective
  ]
})
export class SharedModule { }
