import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../core/services/auth.service';
import { fadeInAnimation } from './../shared/animations';

declare var $:any;

@Component({
  selector: 'gs-login',
  templateUrl: './login.component.html',
  styles: [`
    .login-container{
      margin:0 auto;
      padding:20px;
      position:relative;
      top:200px;
      max-width: 500px;
      border:1px solid rgba(0,0,0,0.1);
      border-radius:5px;
    }
  `],
  animations: [ fadeInAnimation ]
})
export class LoginComponent implements OnInit {

  userLabel: boolean = false;
  routeAnimation: boolean = true;
  loginForm: FormGroup;
  formErrors: any = {
    'user' : ''
  };
  validationMessages: any = {
    'user' : {
      'required' : 'El usuario es requerido',
      'maxlength' : 'El usuario debe tener máximo 15 caracteres'
    }
  };


  constructor(private ls: AuthService, private router:Router, private fb: FormBuilder) {}


  validateLabel(id){
    $('#'+id).focus();
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void{

    this.loginForm = this.fb.group({
      'user' : [ null, [Validators.required, Validators.maxLength(15)] ]
    });

    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));

  }
  
  onValueChanged(data){
    this.userLabel  = (this.loginForm.controls['user'].value != null && this.loginForm.controls['user'].value != '');
    if ( !this.loginForm ){ return; }

    for ( const field in this.formErrors ){
      this.formErrors[field] = '';
      const control = this.loginForm.get(field);

      if ( control && control.dirty && !control.valid && control.value != '' && control.value != null ){
        
        const messages = this.validationMessages[field];

        for ( const key in control.errors ){
          this.formErrors[field] = messages[key];
        }
      }

    }
  }

  submit(){

    if ( !this.loginForm ){ return; }
    if ( this.loginForm.valid )
    {
      this.ls.loggIn(this.loginForm.controls.user.value);
      this.router.navigate(['/home']);
    }
    else
    {
      this.router.navigate(['/login']);
    }

  }

  isLoggedIn(){
    return this.ls.isLoggedIn(); 
  }

}
