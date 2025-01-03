import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-landing-page-2',
  imports: [
    NgClass
  ],
  templateUrl: './landing-page-2.component.html',
  styleUrl: './landing-page-2.component.css'
})
export class LandingPage2Component {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
