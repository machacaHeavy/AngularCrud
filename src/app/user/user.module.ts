import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from '../core/layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

const userRoutes: Routes = [
  { path: '', component: UserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    SharedModule
  ],
  declarations: [UserComponent],
  bootstrap: [ LayoutComponent ]
})
export class UserModule { }
