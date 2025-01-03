import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-landing-page-3',
  imports: [
    NgClass
  ],
  templateUrl: './landing-page-3.component.html',
  styleUrl: './landing-page-3.component.css'
})
export class LandingPage3Component {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
