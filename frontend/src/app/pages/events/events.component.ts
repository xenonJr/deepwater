import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { EventCardComponent } from '../../shared/components/event-card/event-card.component';
import { StaticDataService } from '../../core/services/static-data.service';
import { SeoService } from '../../core/services/seo.service';
import { ChurchEvent } from '../../core/models';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'dw-events',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, EventCardComponent, ScrollRevealDirective],
  template: `
    <dw-page-hero title="Events" subtitle="Join us for upcoming services and special events" label="What's On"></dw-page-hero>
    <section class="events-page">
      <div class="events-page__inner">
        <dw-event-card *ngFor="let e of events" [event]="e" dwReveal></dw-event-card>
      </div>
    </section>
  `,
  styles: [`
    .events-page { padding: 80px 24px; }
    .events-page__inner { max-width: 800px; margin: 0 auto; }
  `]
})
export class EventsComponent implements OnInit {
  events: ChurchEvent[] = [];

  constructor(private data: StaticDataService, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateMeta({ title: 'Events', description: 'Upcoming events and services at Deep Waters Church, Doreen.' });
    this.events = this.data.events;
  }
}
