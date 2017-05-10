import { IntegerValidator } from '../../shared/validators/integer.validator';
import { User } from '../user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { slideInAnimation } from '../../shared/animations/slide-in.animation';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'gs-create',
  templateUrl: './create.component.html',
  styles: [ 
    '.create-container{ max-width:600px; padding:15px; border-radius:5px; margin:0px auto; background-color:rgba(255,255,255,0.5); border:1px solid rgba(0,0,0,0.1); }'
  ],
  animations: [ slideInAnimation ]
})
export class CreateComponent implements OnInit {

  routeAnimation: boolean = true;
  createForm: FormGroup   = null;
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
      maxlength: 'El Email no debe tener más de 20 caracteres'
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

  private buildForm(): void{
    this.createForm = this.fb.group({
      'user' : [null, [Validators.required, Validators.maxLength(15)]],
      'email': [null, [Validators.required, Validators.maxLength(20)]],
      'tel'  : [null, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
    });

    this.createForm.valueChanges.subscribe((data) => this.onValueChanged(data));

  }
  
  private onValueChanged(data)
  {
    console.log(data);
    
    
  }

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

}
