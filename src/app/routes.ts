import { NgRxStoreComponent } from './ng-rx-store/ng-rx-store.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'store',
    component: NgRxStoreComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];