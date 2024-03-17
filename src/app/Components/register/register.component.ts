import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/interfaces/auth';
import {passwordmatchValidator } from 'src/app/shared/password-match-directives';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  Registerform = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    Confirmpassword: ['', Validators.required]
  }, {
    validators: passwordmatchValidator
  })


  constructor( 
      private fb: FormBuilder , 
      private authservice : AuthService , 
      private messageService : MessageService ,
      private router: Router
      ){  }

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

  submitdetails () {

    console.log(this.Registerform.value);

    const postdata = {...this.Registerform.value } ; 
    delete postdata.Confirmpassword; 
    this.authservice.registerUser( postdata as User) .subscribe(
      response => {
        console.log(response );
        this.messageService.add ( { severity:"Sucess", summary : "Sucess" , detail :'Register Sucessfully'}); 
        this.router.navigate(['login'])
      },
      error => { 
        console.error(error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      } 
       
    );
  }
}