import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/porfolio/porfolio').then(m => m.Porfolio),
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog-list/blog-list').then(m => m.BlogListComponent),
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./pages/blog/blog-detail/blog-detail').then(m => m.BlogDetailComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
