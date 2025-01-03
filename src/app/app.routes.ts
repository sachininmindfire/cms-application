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
        path: 'content',
        loadComponent: () => 
          import('./content/content.component').then(m => m.ContentComponent)
      },
      {
        path: 'content/article/{id}',
        loadComponent: () => 
          import('./content/article/article.component').then(m => m.ArticleComponent)
      },
      {
        path: 'settings',
        loadComponent: () => 
          import('./settings/settings.component').then(m => m.SettingsComponent)
      }
    ]
  }
];