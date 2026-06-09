import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../../core/services/notification.service';
import { Notification } from '../../../core/models';

@Component({
  selector: 'dw-notification-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="notification" class="toast" [ngClass]="'toast--' + notification.type" role="alert">
      <span class="toast__message">{{ notification.message }}</span>
      <button class="toast__close" (click)="dismiss()" aria-label="Dismiss">✕</button>
    </div>
  `,
  styles: [`
    .toast {
      position: fixed;
      bottom: 32px;
      right: 32px;
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 20px;
      border-radius: 6px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      font-size: 15px;
      font-family: 'Lato', sans-serif;
      max-width: 400px;
      animation: slideIn 0.3s ease;
    }
    @keyframes slideIn {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .toast--success { background: #15803d; color: #fff; }
    .toast--error   { background: #dc2626; color: #fff; }
    .toast--info    { background: #1d4ed8; color: #fff; }
    .toast--warning { background: #d97706; color: #fff; }
    .toast__message { flex: 1; line-height: 1.5; }
    .toast__close {
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      font-size: 18px;
      opacity: 0.8;
      padding: 0;
    }
    .toast__close:hover { opacity: 1; }
    @media (max-width: 480px) {
      .toast { bottom: 16px; right: 16px; left: 16px; max-width: none; }
    }
  `]
})
export class NotificationToastComponent implements OnInit {
  notification: Notification | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notification$.subscribe(n => this.notification = n);
  }

  dismiss(): void {
    this.notificationService.clear();
  }
}
