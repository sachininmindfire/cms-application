// src/app/layout/main-layout/main-layout.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    MatToolbarModule
  ],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #sidenav mode="side" opened class="sidenav"
                   [class.sidenav-collapsed]="isCollapsed">
        <div class="sidenav-header">
          <h1 class="text-xl font-bold p-4">CMS Dashboard</h1>
        </div>
        
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
    .sidenav-container {
      height: 100vh;
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
      height: 64px;
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
  isCollapsed = false;

  toggleSidenav() {
    this.isCollapsed = !this.isCollapsed;
  }
}
