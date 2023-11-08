import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface NavItem {
  path: string;
  title: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navItems: NavItem[] = [];

  constructor(private router: Router) {
    this.navItems = this.router.config
      .filter((route) => route.data && route.data['showInNav'])
      .map((route) => {
        return {
          path: route.path || '/',
          title: route.data!['title'],
        };
      });
  }
}
