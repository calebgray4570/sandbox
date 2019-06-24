import { AbstractControl } from "@angular/forms";

export class CustomValidators {
    static passwordMatchValidator(control: AbstractControl) {
        const password: string = control.get('password').value; // get password from our password form control
        const confirm_password: string = control.get('confirm_password').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirm_password) {
          // if they don't match, set an error in our confirmPassword form control
          control.get('confirm_password').setErrors({ NoPasswordMatch: true });
        } else {
            return null
        }
      }
}