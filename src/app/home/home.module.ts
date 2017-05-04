import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  { 
    path: '', 
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ] 
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
