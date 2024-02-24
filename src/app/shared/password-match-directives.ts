import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordmatchValidator :ValidatorFn= (control: AbstractControl) : ValidationErrors | null => {

    const password = control.get('password');
    const Confirmpassword = control.get('Confirmpassword');
    if (password && Confirmpassword && password.value !== Confirmpassword.value) {
        return { passwordMismatch: true };
    }

    return null;
}