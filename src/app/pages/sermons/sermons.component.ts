import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { StaticDataService } from '../../core/services/static-data.service';
import { SeoService } from '../../core/services/seo.service';
import { Sermon } from '../../core/models';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'dw-sermons',
  standalone: true,
  imports: [
    CommonModule, PageHeroComponent, SectionLabelComponent,
    ScrollRevealDirective, LucideAngularModule
  ],
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss']
})
export class SermonsComponent implements OnInit {
  sermons: Sermon[] = [];
  featured: Sermon | null = null;
  filteredSermons: Sermon[] = [];
  seriesList: string[] = [];
  activeSeries: string | null = null;

  resources = [
    {
      icon: 'book-open',
      title: 'YouVersion Bible App',
      desc: 'Follow along with Sunday readings and build a daily Bible habit with the free YouVersion app.',
      cta: 'Open App',
      href: 'https://www.bible.com',
      delay: 0
    },
    {
      icon: 'file-text',
      title: 'Sermon Notes',
      desc: 'Sermon notes and study guides are available from our welcome desk each Sunday morning.',
      cta: 'Plan Your Visit',
      href: '/plan-your-visit',
      delay: 100
    },
    {
      icon: 'headphones',
      title: 'Podcast & Audio',
      desc: 'Listen to past messages as audio podcasts — ideal for your commute or morning walk.',
      cta: 'Subscribe',
      href: 'https://www.youtube.com/@DeepWatersChurch',
      delay: 200
    }
  ];

  constructor(private data: StaticDataService, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateMeta({
      title: 'Sermons & Media',
      description: 'Watch, listen and download sermons from Deep Waters Church. New messages every Sunday.'
    });
    this.sermons = this.data.sermons;
    this.featured = this.data.getFeaturedSermon();
    this.filteredSermons = this.sermons;
    this.seriesList = [...new Set(this.sermons.map(s => s.sermonSeries).filter((s): s is string => !!s))];
  }

  filterBySeries(series: string | null): void {
    this.activeSeries = series;
    this.filteredSermons = series
      ? this.sermons.filter(s => s.sermonSeries === series)
      : this.sermons;
  }
}
