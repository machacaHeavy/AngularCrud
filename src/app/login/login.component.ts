import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './shared/login.service';
import { fadeInAnimation } from './../shared/animations';
import { Login } from './shared/login.model';

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

  /* Form fields object */
  fields: any = null;

  /* Component vars */
  routeAnimation : boolean   = true;
  loginForm      : FormGroup = null;
  loginModel     : Login     = new Login();


  constructor(private ls: LoginService, private router:Router, private fb: FormBuilder) {}

  ngOnInit()
  {
    this.initFields();
    this.buildForm();
  }

  /* buildForm */
  private buildForm(): void
  {

    this.loginForm = this.fb.group({
      'user' : [ null, [Validators.required, Validators.maxLength(15)] ]
    });
    this.loginForm.valueChanges.subscribe(data => this.onValueChanged());

  }
  /* End */

  /* onValueChanged */
  private onValueChanged(): void
  {
    if ( !this.loginForm ){ return; }

    for ( const field in this.fields )
    {
      this.fields[field].small = '';

      const control = this.loginForm.get(field);

      if ( control && control.dirty && !control.valid && control.value != '' && control.value != null )
      {
        const messages = this.fields[field].validationMessages;

        for ( const key in control.errors )
        {
          this.fields[field].small = messages[key];
        }
      }

      this.fields[field].error = ( control && control.dirty && !control.valid && control.value != '' && control.value != null );
      this.fields[field].label = ( control && control.value != '' && control.value != null );
    }
  }
  /* End */

  /* On submit */
  private submit(): void
  {
     this.onValueChanged();
     if ( this.loginForm.valid )
     {
        this.loginModel.setUserName(this.loginForm['user'].value.trim());

        if ( this.ls.logIn(this.loginModel) )
        {
          this.router.navigate(['/home']);
        }
        else
        {
          this.router.navigate(['/login']);
        }
     }
  }
  /* End */

  /* On label click */
  private focusInput( id: string ): void
  {
    $( '#'+ id ).focus();
  }
  /* End */

  /* Initialize fields object */
  private initFields(): void
  {
    this.fields = {
      "user" : {
        "error" : false,
        "label" : false,
        "small" : '',
        "validationMessages" : {
          "required"  : "El nombre de usuario es requerido.",
          "maxlength" : "El nombre de usuario de tener máximo 15 caracteres."
        }
      }
    };
  }
  /* End */


}
