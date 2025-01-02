import { Routes } from '@angular/router';
import {LandingPage1Component} from './pages/landing-page-1/landing-page-1.component';
import {AppComponent} from './app.component';
import {WelcomePageComponent} from './pages/welcome-page/welcome-page.component';

export const routes: Routes = [
  {
    path: '',
    component:WelcomePageComponent
  },
  {
    path: 'landing-page-1',
    component: LandingPage1Component
  }
];
