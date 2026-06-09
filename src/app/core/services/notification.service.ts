import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification, NotificationType } from '../models';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private _notification = new BehaviorSubject<Notification | null>(null);
  notification$ = this._notification.asObservable();

  private timer: ReturnType<typeof setTimeout> | null = null;

  show(message: string, type: NotificationType, duration = 4000): void {
    if (this.timer) clearTimeout(this.timer);
    this._notification.next({ message, type });
    this.timer = setTimeout(() => this.clear(), duration);
  }

  clear(): void {
    this._notification.next(null);
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
