import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public canBeStrider = (control: FormControl): ValidationErrors | null => {
    const value = control.value.trim().toLowerCase();
    if (value === 'strider') {
      return {
        noStrider: true,
      };
    }
    return null;
  };

  public isValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched;
  }

  public isFieldOneEqualToFieldTwo(fieldOneName: string, fieldTwoName: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(fieldOneName)?.value;
      const fieldValue2 = formGroup.get(fieldOneName)?.value;

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(fieldTwoName)?.setErrors({ noEqual: true });
        return { noEqual: true };
      }

      formGroup.get(fieldTwoName)?.setErrors(null);
      return null;
    };
  }
}
