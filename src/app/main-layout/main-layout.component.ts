// src/app/layout/main-layout/main-layout.component.ts
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../auth/auth-service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
],
  template: `
    <mat-toolbar color="primary" class="toolbar">
      <span>Content Management System</span>
      <span class="flex-grow"></span>
     
      <button *ngIf="!authService.isAuthenticated()" mat-icon-button [matMenuTriggerFor]="userMenu">
        <mat-icon>account_circle</mat-icon>
      </button>

      <div mat-icon-button *ngIf="authService.isAuthenticated()" [matMenuTriggerFor]="userMenu">
        <mat-icon class="example-icon" aria-hidden="false" aria-label="Verified icon">person</mat-icon>
        <span>{{authService.getLoggedInUser()?.userName}}</span>
      </div>
      <mat-menu #userMenu="matMenu">
        <div *ngIf="authService.isAuthenticated()" class="user-menu-header" mat-menu-item disabled>
          <mat-icon>person</mat-icon>
          <span>{{authService.getLoggedInUser()?.userName}}</span>
        </div>
        <mat-divider></mat-divider>
        <button *ngIf="authService.isAuthenticated()" mat-menu-item (click)="onAccount()">
          <mat-icon>manage_accounts</mat-icon>
          <span>My Account</span>
        </button>
        <button *ngIf="!authService.isAuthenticated()" mat-menu-item (click)="onLogin()">
          <mat-icon>login</mat-icon>
          <span>Login</span>
        </button>
        <button *ngIf="authService.isAuthenticated()" mat-menu-item (click)="onLogout()">
          <mat-icon>logout</mat-icon>
          <span>Logout</span>
        </button>
      </mat-menu>
    </mat-toolbar>
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #sidenav mode="side" opened class="sidenav"
                   [class.sidenav-collapsed]="isCollapsed">      
        
        <mat-nav-list>
          <a mat-list-item routerLink="/dashboard" routerLinkActive="active">
            <mat-icon>dashboard</mat-icon>
            <span *ngIf="!isCollapsed">Dashboard</span>
          </a>
          <a mat-list-item routerLink="/content" routerLinkActive="active">
            <mat-icon>article</mat-icon>
            <span *ngIf="!isCollapsed">Content</span>
          </a>
          <a mat-list-item routerLink="/settings" routerLinkActive="active">
            <mat-icon>settings</mat-icon>
            <span *ngIf="!isCollapsed">Settings</span>
          </a>
         
        </mat-nav-list>

        <button mat-icon-button class="toggle-button" (click)="toggleSidenav()">
          <mat-icon>{{ isCollapsed ? 'chevron_right' : 'chevron_left' }}</mat-icon>
        </button>
      </mat-sidenav>

      <mat-sidenav-content [style.margin-left]="isCollapsed ? '64px' : '200px'">
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .toolbar {
      height: 48px; /* Reduced from default 64px */
    }

    .sidenav-container {
      height: calc(100vh - 48px); /* Adjusted to account for smaller toolbar */
    }

    .sidenav {
      width: 200px;
      background-color: #f5f5f5;
      border-right: 1px solid #ddd;
      transition: width 0.3s ease;
    }

    .sidenav-collapsed {
      width: 64px;
    }

    .sidenav-header {
      border-bottom: 1px solid #ddd;
      height: 48px;
      display: flex;
      align-items: center;
    }

    mat-nav-list {
      padding-top: 1rem;
    }

    mat-nav-list a {
      display: flex;
      align-items: center;
      gap: 1rem;
      height: 48px;
    }

    .active {
      background-color: rgba(0, 0, 0, 0.05);
      color: #1976d2;
    }

    mat-icon {
      margin-left: 1rem;
    }

    .toggle-button {
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
    }
  `]
})
export class MainLayoutComponent {
  authService = inject(AuthService);
  private router = inject(Router);
  
  isCollapsed = false;

  toggleSidenav() {
    this.isCollapsed = !this.isCollapsed;
  }

  onLogin() {   
    this.router.navigate(['/login']);
  }

  onAccount() {
    this.router.navigate(['/account']);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
