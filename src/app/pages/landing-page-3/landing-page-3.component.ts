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

  features = [
    {
      title: "Plan Your Day, Your Way",
      description: "Drag and drop tasks, set goals, and track your progress. Customize your dashboard to your needs.",
      icon: "one.svg"
    },
    {
      title: "Keep Everything on Track",
      description: "Meet deadlines with reminders and milestone tracking. Analyze your productivity to improve.",
      icon: "two.svg"
    },
    {
      title: "Collaborate Effortlessly",
      description: "Collaborate on projects, assign tasks, and monitor progress together.",
      icon: "three.svg"
    },
    {
      title: "Flexible Scalability",
      description: "Scale your resources on-demand to meet your business needs.",
      icon: "four.svg"
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees, just simple and predictable pricing.",
      icon: "five.svg"
    },
    {
      title: "Instant Deployments",
      description: "Launch servers in under 60 seconds with one-click provisioning.",
      icon: "six.svg"
    }
  ];
}
