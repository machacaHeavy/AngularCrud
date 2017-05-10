import { AuthGuard } from '../shared/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';


const aboutRoutes: Routes = [
  { path: '', canActivate:[AuthGuard], children:[
    { path: '', component: AboutComponent }
  ] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRoutes)
  ],
  providers: [AuthGuard],
  declarations: [AboutComponent]
})
export class AboutModule { }
