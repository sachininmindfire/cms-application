import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { authGuard } from './auth/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',        
        pathMatch: 'full',        
      },
      {
        path: 'dashboard',
        loadComponent: () => 
          import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'content/article',
        canActivate: [authGuard],
        loadComponent: () => 
          import('./content/article/article.component').then(m => m.ArticleComponent)
      },
      {
        path: 'content/article/:id',
        canActivate: [authGuard],
        loadComponent: () => 
          import('./content/article/article.component').then(m => m.ArticleComponent)
      },
      {
        path: 'content/tip/:id',
        canActivate: [authGuard],
        loadComponent: () => 
          import('./content/tip/tip.component').then(m => m.TipComponent)
      },
      {
        path: 'content/term/:id',
        canActivate: [authGuard],
        loadComponent: () => 
          import('./content/term/term.component').then(m => m.TermComponent)
      },
      {
        path: 'content/tag/:id',
        canActivate: [authGuard],
        loadComponent: () => 
          import('./content/tag/tag.component').then(m => m.TagComponent)
      },
      {
        path: 'content',
        canActivate: [authGuard],
        loadComponent: () => 
          import('./content/content.component').then(m => m.ContentComponent)
      },
      {
        path: 'settings',
        canActivate: [authGuard],
        loadComponent: () => 
          import('./settings/settings.component').then(m => m.SettingsComponent)
      },
      {
        path: 'login',        
        loadComponent: () => 
          import('./auth/login/login.component').then(m => m.LoginComponent)
      }
    ]
  }
];