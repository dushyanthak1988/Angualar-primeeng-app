import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
export const passwordmatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('Confirmpassword');

    if (!password || !confirmPassword) {
        return null;
    }

    return password.value === confirmPassword.value ? null : { passwordMismatch: true }
}