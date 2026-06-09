import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NotificationToastComponent } from './shared/components/notification-toast/notification-toast.component';
import { LoadingBarComponent } from './shared/components/loading-bar/loading-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NotificationToastComponent, LoadingBarComponent],
  template: `
    <dw-loading-bar></dw-loading-bar>
    <dw-header></dw-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <dw-footer></dw-footer>
    <dw-notification-toast></dw-notification-toast>
  `
})
export class AppComponent {}
