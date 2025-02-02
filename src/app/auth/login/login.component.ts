import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Environment } from '../../../environments/environment';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../auth-service';
import { LoginRequest, LoginResponse } from '../interfaces/auth-interfaces';
import { Observable, tap } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => this.router.navigate(['/dashboard']),
        error: (error) => console.error('Login failed:', error)
      });
    }
    // if (this.loginForm.valid) {
    //   const username = this.loginForm.value.username;
    //   const password = this.loginForm.value.password;
    //   console.log('Form submitted:', this.loginForm.value);
    //   this.login(username, password);
    // }
  }

  // login(username: string, password: string) {
  //   this.http.post(Environment.AuthApiUrl, {
  //     username: username,
  //     password: password
  //   }).subscribe({
  //     next: (response: any) => {
  //       localStorage.setItem('token', response.token);
  //       console.log('Login successful. Token:', response.token);
  //       this.router.navigate(['/dashboard']);
  //     },
  //     error: (error) => {
  //       console.error('Login failed', error);
  //     }
  //   });
  // }

  // login(credentials: LoginRequest): Observable<LoginResponse> {
  //   return this.http.post<LoginResponse>(Environment.AuthApiUrl, credentials).pipe(
  //     tap(response => {
  //       this.setAuthState(response.token, response.user);
  //     })
  //   );
  // }
}
