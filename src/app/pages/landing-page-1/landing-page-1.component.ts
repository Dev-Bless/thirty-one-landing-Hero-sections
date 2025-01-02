import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-landing-page-1',
  imports: [
    NgClass
  ],
  templateUrl: './landing-page-1.component.html',
  styleUrl: './landing-page-1.component.css'
})
export class LandingPage1Component {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
