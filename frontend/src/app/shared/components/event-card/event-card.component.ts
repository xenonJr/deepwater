import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChurchEvent } from '../../../core/models';

@Component({
  selector: 'dw-event-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="event-card">
      <div class="event-card__badge">
        <span class="event-card__badge-month">{{ month }}</span>
        <span class="event-card__badge-day">{{ day }}</span>
      </div>
      <div class="event-card__body">
        <h3 class="event-card__title">{{ event.title }}</h3>
        <p class="event-card__sub">
          {{ event.eventTime }}<span *ngIf="event.endTime"> – {{ event.endTime }}</span>
        </p>
        <p class="event-card__desc" *ngIf="event.description">{{ event.description }}</p>
      </div>
    </article>
  `,
  styles: [`
    .event-card {
      display: flex; gap: 16px; padding: 14px 0;
      border-bottom: 1px solid #eee;
      &:last-child { border-bottom: none; }
    }
    .event-card__badge {
      flex-shrink: 0; width: 54px;
      border: 1.5px solid #dde3ed; border-radius: 6px;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      padding: 8px 4px; gap: 2px;
    }
    .event-card__badge-month {
      font-family: 'Lato', sans-serif; font-size: 10px; font-weight: 700;
      letter-spacing: 1.5px; text-transform: uppercase; color: #C9963B;
    }
    .event-card__badge-day {
      font-family: 'Lato', sans-serif; font-size: 26px; font-weight: 800;
      color: #1a2744; line-height: 1;
    }
    .event-card__body { flex: 1; padding-top: 4px; }
    .event-card__title {
      font-family: 'Lato', sans-serif;
      font-size: 15px; font-weight: 700; color: #1a2744; margin: 0 0 4px; line-height: 1.3;
    }
    .event-card__sub {
      font-size: 13px; color: #7a8499; margin: 0 0 4px;
    }
    .event-card__desc { font-size: 13px; color: #888; margin: 0; line-height: 1.5; }
  `]
})
export class EventCardComponent {
  @Input() event!: ChurchEvent;

  get month(): string {
    if (!this.event?.eventDate) return '';
    const d = new Date(this.event.eventDate + 'T00:00:00');
    return d.toLocaleString('en-AU', { month: 'short' }).toUpperCase();
  }
  get day(): string {
    if (!this.event?.eventDate) return '';
    return new Date(this.event.eventDate + 'T00:00:00').getDate().toString();
  }
}
