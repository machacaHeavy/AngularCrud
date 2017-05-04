import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

const userRoutes: Routes = [

  { path: '', component: LayoutComponent, children: [
    { path: '', component: UserComponent }
  ]}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [ UserComponent ]
})
export class UserModule { }
