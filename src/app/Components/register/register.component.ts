import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {passwordmatchValidator } from 'src/app/shared/password-match-directives';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  Registerform = this.fb.group({

    fullName: ["",[Validators.required , Validators.pattern(/^[A-Za-z]+(?:[A-Za-z]+)*$/)]], 
    email: ['', [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
    Confirmpassword: ["", [Validators.required]],
    passwordmatching : passwordmatchValidator

    }
  );

  constructor( private fb: FormBuilder){  }

  get fullName() {
    return this.Registerform.controls['fullName'];
  }

  get email() {
    return this.Registerform.controls['email'];
  }
  get password() {
    return this.Registerform.controls['password'];
  }
  get Confirmpassword() {
    return this.Registerform.controls['Confirmpassword'];
  }
}
