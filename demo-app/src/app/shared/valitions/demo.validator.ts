import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export class DemoValidator {
  static test1(controlName: string): ValidationErrors {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      if ((control.value as string).indexOf('test') >= 0){
        control.setErrors({test1: true});
      }

      control.setErrors(null);
    };
  }
}
