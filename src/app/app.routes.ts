import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventaryComponent } from './inventary/inventary.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'inventory',
    component: InventaryComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
