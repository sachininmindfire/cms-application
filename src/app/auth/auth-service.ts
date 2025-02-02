import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { AuthState, LoginRequest, LoginResponse, User } from './interfaces/auth-interfaces';
import { Environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_KEY = 'token';
  private readonly apiUrl = Environment.authApiUrl;
  
  private authState = signal<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false
  });

  constructor(private http: HttpClient) {
    this.initializeAuthState();
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login?audience=CMS.Service`, credentials).pipe(
      tap(response => {
        this.setAuthState(response.token, response.user);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.AUTH_KEY);
    this.authState.set({
      user: null,
      token: null,
      isAuthenticated: false
    });
  }

  isAuthenticated(): boolean {
    return this.authState().isAuthenticated;
  }

  getAuthToken(): string | null {
    return this.authState().token;
  }

  getLoggedInUser(): User | null {
    return this.authState().user;
  }

  private initializeAuthState(): void {
    const token = localStorage.getItem(this.AUTH_KEY);
    // if (token) {
    //   this.validateAndRefreshToken(token);
    // }
  }

  private setAuthState(token: string, user: User): void {
    
    console.log('Login successful. Token:', token);

    localStorage.setItem(this.AUTH_KEY, token);
    this.authState.set({
      user,
      token,
      isAuthenticated: true
    });
  }

  private validateAndRefreshToken(token: string): void {
    this.http.post<LoginResponse>(`${this.apiUrl}/validate-token`, { token })
      .subscribe({
        next: (response) => this.setAuthState(response.token, response.user),
        error: () => this.logout()
      });
  }
}