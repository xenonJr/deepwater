import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SermonCardComponent } from '../../shared/components/sermon-card/sermon-card.component';
import { StaticDataService } from '../../core/services/static-data.service';
import { SeoService } from '../../core/services/seo.service';
import { Sermon } from '../../core/models';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'dw-sermons',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, SermonCardComponent, ScrollRevealDirective],
  template: `
    <dw-page-hero title="Sermons" subtitle="Watch or listen to messages from Deep Waters Church" label="Messages"></dw-page-hero>
    <section class="sermons-page">
      <div class="sermons-page__inner">
        <div class="sermons-page__grid">
          <dw-sermon-card *ngFor="let sermon of sermons" [sermon]="sermon" dwReveal></dw-sermon-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .sermons-page { padding: 80px 24px; }
    .sermons-page__inner { max-width: 1200px; margin: 0 auto; }
    .sermons-page__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 32px; }
  `]
})
export class SermonsComponent implements OnInit {
  sermons: Sermon[] = [];

  constructor(private data: StaticDataService, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateMeta({ title: 'Sermons', description: 'Watch and listen to sermons from Deep Waters Church.' });
    this.sermons = this.data.sermons;
  }
}
