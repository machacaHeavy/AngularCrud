import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from '../core/layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    SharedModule
  ],
  declarations: [HomeComponent],
  bootstrap: [ LayoutComponent ]
})
export class HomeModule { }
