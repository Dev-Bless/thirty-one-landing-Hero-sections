import { Routes } from '@angular/router';
import {LandingPage1Component} from './pages/landing-page-1/landing-page-1.component';
import {AppComponent} from './app.component';
import {WelcomePageComponent} from './pages/welcome-page/welcome-page.component';
import {LandingPage2Component} from './pages/landing-page-2/landing-page-2.component';

export const routes: Routes = [
  {
    path: '',
    component:WelcomePageComponent
  },
  {
    path: 'landing-page-1',
    component: LandingPage1Component
  },
  {
    path: 'landing-page-2',
    component: LandingPage2Component
  },
  {
    path:'**',
    redirectTo: ''
  }
];
