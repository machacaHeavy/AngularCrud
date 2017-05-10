import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound.component';


const NOTFOUND_ROUTES: Routes = [
  { path: '', component: NotfoundComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(NOTFOUND_ROUTES)
  ],
  declarations: [NotfoundComponent]
})
export class NotfoundModule { }
