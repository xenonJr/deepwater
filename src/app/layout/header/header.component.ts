import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

interface NavItem { label: string; route: string; }

@Component({
  selector: 'dw-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  scrolled = false;
  mobileOpen = false;

  navItems: NavItem[] = [
    { label: 'Home',                   route: '/' },
    { label: 'About Us',               route: '/about' },
    { label: 'What to Expect',         route: '/plan-your-visit' },
    { label: 'Service Times & Location', route: '/service-times' },
    { label: 'Ministries',             route: '/ministries' },
    { label: 'Contact Us',             route: '/contact' }
  ];

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled = window.scrollY > 40; }

  toggleMobile(): void { this.mobileOpen = !this.mobileOpen; }
  closeMobile(): void  { this.mobileOpen = false; }
}
