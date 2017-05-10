import { AuthGuard } from '../shared/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  { 
    path: '', canActivate: [AuthGuard],  children: [
      {
        path: '', component: HomeComponent
      }
    ] 
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  providers: [ AuthGuard ],
  declarations: [HomeComponent]
})
export class HomeModule { }
