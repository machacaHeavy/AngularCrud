import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { User } from './../user.model';
import { slideInAnimation } from './../../shared/animations';

declare var $:any;

@Component({
  selector: 'gs-create',
  templateUrl: './create2.component.html',
  styles: [`
    .create-container{ max-width:500px; padding:20px; border-radius:5px; margin:0px auto; background-color:rgba(255,255,255,0.5); border:1px solid rgba(0,0,0,0.1); }
    .create-container h4{ color:rgba(0,0,0,0.6); }
   `],
  animations: [ slideInAnimation ]
})
export class CreateComponent implements OnInit {


  userLabel: boolean = false;
  emailLabel: boolean = false;
  telLabel: boolean = false;
  showEmailOk:boolean = false;
  showEmailRemove: boolean = false;
  showUserOk: boolean = false;
  showUserRemove: boolean = false;
  showTelOk: boolean = false;
  showTelRemove: boolean = false;

  routeAnimation: boolean = true;
  createForm: FormGroup;
  um: User = new User();


  formErrors: any = {
    user: '',
    email: '',
    tel: ''
  };
  

  validationMessages: any = {
    user: {
      required: 'El campo usuario es requerido',
      maxlength: 'El usuario no debe tener más de 15 caracteres'
    },
    email: {
      required: 'El campo Email es requerido',
      maxlength: 'El Email no debe tener más de 20 caracteres',
      pattern: 'El email no tiene el formato correcto'
    },
    tel: {
      required: 'El campo Teléfono es requerido',
      maxlength: 'El Teléfono no debe tener más de 10 números',
      minlength: 'El Teléfono no debe tener menos de 10 números'
    }
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
     this.buildForm();
  }
  
  private validateLabel(id){
      $('#'+id).focus();
  }

  private buildForm(): void{
    this.createForm = this.fb.group({
      'user' : [null, [Validators.required, Validators.maxLength(15)]],
      'email': [null, [Validators.required, Validators.maxLength(20), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      'tel'  : [null, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
    });
  
  
    this.createForm.valueChanges.subscribe((data) => this.onValueChanged(data));

  }
  
  private onValueChanged(data)
  {
    this.userLabel  = (this.createForm.controls['user'].value != null && this.createForm.controls['user'].value != '');
    this.emailLabel = (this.createForm.controls['email'].value != null && this.createForm.controls['email'].value != '');
    this.telLabel   = (this.createForm.controls['tel'].value != null && this.createForm.controls['tel'].value != '');
    this.showEmailOk = (this.createForm.controls['email'].value != null && this.createForm.controls['email'].value != '' && this.createForm.controls['email'].dirty && this.createForm.controls['email'].valid );
    this.showEmailRemove = (this.createForm.controls['email'].value != null && this.createForm.controls['email'].value != '' && this.createForm.controls['email'].dirty && this.createForm.controls['email'].invalid );
    this.showUserOk = (this.createForm.controls['user'].value != null && this.createForm.controls['user'].value != '' && this.createForm.controls['user'].dirty && this.createForm.controls['user'].valid );
    this.showUserRemove = (this.createForm.controls['user'].value != null && this.createForm.controls['user'].value != '' && this.createForm.controls['user'].dirty && this.createForm.controls['user'].invalid );
    this.showTelOk = (this.createForm.controls['tel'].value != null && this.createForm.controls['tel'].value != '' && this.createForm.controls['tel'].dirty && this.createForm.controls['tel'].valid );
    this.showTelRemove = (this.createForm.controls['tel'].value != null && this.createForm.controls['tel'].value != '' && this.createForm.controls['tel'].dirty && this.createForm.controls['tel'].invalid );


      for ( const vf in this.um.validations )
      {
        this.formErrors[vf] = '';
        if (this.createForm.controls[vf] && this.createForm.controls[vf].invalid && ( this.createForm.controls[vf].value != null && this.createForm.controls[vf].value != '' ) )
        {
          this.um.validations[vf] = true;
         
          const messages = this.validationMessages[vf];
          for( const key in this.createForm.controls[vf].errors )
          {
            this.formErrors[vf] = messages[key];
          }
        }
        else
        {
          
          this.um.validations[vf] = false;
       
         
        }
        
      }
      
  }
/*
  private onSubmit()
  {

      if ( !this.createForm ){ return;}
      
      for ( const vf in this.um.validations )
      {
        this.formErrors[vf] = '';
        if ( this.createForm.controls[vf].invalid && this.createForm.controls[vf].value != '' )
        {
          this.um.validations[vf] = true;
          const messages = this.validationMessages[vf];
          for( const key in this.createForm.controls[vf].errors )
          {
            this.formErrors[vf] += messages[key];
          }
        }
        else
        {
          this.um.validations[vf] = false;
        }
        
      }
      

  }
  */

}
