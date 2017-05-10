import { StringDirective } from '../shared/directives/string.directive';
import { IntegerDirective } from '../shared/directives/integer.directive';
import { LoginGuard } from '../shared/guards/login.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';


const LOGIN_ROUTES: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LOGIN_ROUTES),
    ReactiveFormsModule
  ],
  providers: [ 
    LoginService, 
    LoginGuard 
  ],
  declarations: [ 
    LoginComponent, 
    IntegerDirective, 
    StringDirective
  ]
})
export class LoginModule { }
