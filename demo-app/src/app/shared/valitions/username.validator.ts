import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class UsernameValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors {
    if ((control.value as string).indexOf(' ') >= 0){
      return {cannotContainSpace: true};
    }

    return null;
  }
}
