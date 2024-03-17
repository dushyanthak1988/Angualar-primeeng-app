import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
              private fb: FormBuilder,
              private authSerice : AuthService , 
              private messageService : MessageService ,
              private router: Router) {}
  get email() {
    return this.loginform.controls['email'];
  }
  get password() { return this.loginform.controls['password']; }

  LoginDetails() {
    const { email, password } = this.loginform.value;
    this.authSerice.getUserByEmail(email as string).subscribe(
      response => {
        if (response.length > 0 && response[0].password === password) {
          sessionStorage.setItem('email', email as string);
          this.router.navigate(['/home']);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successful' });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email or password is wrong' });
        }
      },
      error => {
        console.error(error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    );
  }

}