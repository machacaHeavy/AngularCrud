import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { NotfoundComponent } from './notfound/notfound.component';


const errorRoutes: Routes = [
  { path: '',  children: [
    { path: '', component: NotfoundComponent }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(errorRoutes)
  ],
  declarations: [ErrorComponent, NotfoundComponent]
})
export class ErrorModule { }
