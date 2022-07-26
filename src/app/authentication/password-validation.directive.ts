import { Directive } from '@angular/core';
import { Validators, NG_VALIDATORS, ValidatorFn, AbstractControl } from '@angular/forms';


export function passwordValidator():  ValidatorFn {

  return (control: AbstractControl) => {

    const passwordValidationDirective = new PasswordValidationDirective();
    return passwordValidationDirective.validate(control);

  }
}

@Directive({
  selector: '[appPasswordValidation]',
  providers : [{provide: NG_VALIDATORS, useExisting: PasswordValidationDirective, multi: true}]
})

export class PasswordValidationDirective  implements Validators{

  passwordProhibidos: string [] = ['123456'];

  public validate (control: import('@angular/forms').AbstractControl) : import ("@angular/forms").ValidationErrors{

    const password = <string> control.value;

    /*if(password.length < 4){
      return;
    }

    if(this.passwordProhibidos.indexOf(password) !== -1){
      return {'passwordValidation' : {'message' : 'Escoge una mejor contraseña'}}
    }

    if(password == password.toLocaleLowerCase()){
      return {'passwordValidation' : {'message' : 'Tu contraseña debe tener al menos una mayúscula'}}
    }

    if(password == password.toUpperCase()){
      return {'passwordValidation' : {'message' : 'Tu contraseña debe tener al menos una minúscula'}}
    }

    if (!/\b/.test(password)) {
      return {'passwordValidation' :  {'message' : 'Tu contraseña debe de contener almenos un caracter númerico'}}
    }*/

    return null;

  };

  constructor() { }

}
