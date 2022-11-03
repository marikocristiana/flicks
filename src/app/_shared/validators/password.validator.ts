import { FormControl } from "@angular/forms";

interface Validation {
  [key: string]: boolean;
}

export class PasswordValidator {

  public static valid(control: FormControl): Validation | null {
    
    let hasNumber  = /\d/.test(control.value);
    let hasUpper   = /[A-Z]/.test(control.value);
    let hasLower   = /[a-z]/.test(control.value);
    let hasSpecial = /[$@$!%*?&]/.test(control.value);
    let hasMinimum = /.{6,}/.test(control.value);

    const valid = (
      hasNumber  &&
      hasUpper   &&
      hasLower   &&
      hasSpecial &&
      hasMinimum
    );

    if (!valid) {
      return { valid: true };
    }

    return null;

  }

}