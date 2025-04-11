// login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { email: '', password: '' };
  submitted = false;

  constructor(private router: Router) {}

  onSubmit(form: any) {
    this.submitted = true;
    if (form.valid) {
      console.log('Login successful:', this.loginData);
      this.router.navigate(['/']);
    }
  }
}