import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => 
          import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'content/article',
        loadComponent: () => 
          import('./content/article/article.component').then(m => m.ArticleComponent)
      },
      {
        path: 'content/article/:id',
        loadComponent: () => 
          import('./content/article/article.component').then(m => m.ArticleComponent)
      },
      {
        path: 'content/tip/:id',
        loadComponent: () => 
          import('./content/tip/tip.component').then(m => m.TipComponent)
      },
      {
        path: 'content/term/:id',
        loadComponent: () => 
          import('./content/term/term.component').then(m => m.TermComponent)
      },
      {
        path: 'content/tag/:id',
        loadComponent: () => 
          import('./content/tag/tag.component').then(m => m.TagComponent)
      },
      {
        path: 'content',
        loadComponent: () => 
          import('./content/content.component').then(m => m.ContentComponent)
      },
      {
        path: 'settings',
        loadComponent: () => 
          import('./settings/settings.component').then(m => m.SettingsComponent)
      }
    ]
  }
];