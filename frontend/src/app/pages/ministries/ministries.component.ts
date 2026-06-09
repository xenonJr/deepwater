import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { MinistryCardComponent } from '../../shared/components/ministry-card/ministry-card.component';
import { StaticDataService } from '../../core/services/static-data.service';
import { SeoService } from '../../core/services/seo.service';
import { Ministry } from '../../core/models';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'dw-ministries',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, MinistryCardComponent, ScrollRevealDirective],
  template: `
    <dw-page-hero title="Ministries" subtitle="Get connected and grow together" label="Get Involved"></dw-page-hero>
    <section class="min-page">
      <div class="min-page__inner">
        <div class="min-page__grid">
          <dw-ministry-card *ngFor="let m of ministries" [ministry]="m" dwReveal></dw-ministry-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .min-page { padding: 80px 24px; background: #f8f9fb; }
    .min-page__inner { max-width: 1100px; margin: 0 auto; }
    .min-page__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 32px; }
  `]
})
export class MinistriesComponent implements OnInit {
  ministries: Ministry[] = [];

  constructor(private data: StaticDataService, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateMeta({ title: 'Ministries', description: 'Explore the ministries at Deep Waters Church.' });
    this.ministries = this.data.ministries;
  }
}
