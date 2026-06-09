import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Ministry } from '../../../core/models';

@Component({
  selector: 'dw-ministry-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="ministry-card" [class.ministry-card--compact]="compact">
      <lucide-icon [name]="iconMap[ministry.iconName] || 'users'" [size]="40" class="ministry-card__icon"></lucide-icon>
      <h3 class="ministry-card__name">{{ ministry.name }}</h3>
      <p class="ministry-card__desc" *ngIf="!compact">{{ ministry.description }}</p>
    </div>
  `,
  styles: [`
    .ministry-card {
      text-align: center; padding: 16px 8px;
      display: flex; flex-direction: column; align-items: center;
    }
    .ministry-card__icon {
      color: #2a4a8f; stroke-width: 1.2;
      margin-bottom: 12px; display: block;
    }
    .ministry-card__name {
      font-family: 'Lato', sans-serif;
      font-size: 11px; font-weight: 700;
      letter-spacing: 0.5px;
      color: #1a2744; margin: 0 0 6px; line-height: 1.4;
    }
    .ministry-card__desc { font-size: 12px; color: #666; margin: 0; line-height: 1.5; }
  `]
})
export class MinistryCardComponent {
  @Input() ministry!: Ministry;
  @Input() compact = false;

  iconMap: Record<string, string> = {
    'hands-praying': 'hand',
    'baby':          'baby',
    'users':         'users',
    'user':          'user',
    'heart':         'heart',
    'home':          'house',
    'music':         'music',
    'globe':         'globe',
    'cross':         'cross'
  };
}
