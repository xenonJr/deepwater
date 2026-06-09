import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { StaticDataService } from '../../core/services/static-data.service';
import { SeoService } from '../../core/services/seo.service';
import { Ministry } from '../../core/models';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'dw-ministries',
  standalone: true,
  imports: [
    CommonModule, RouterModule, PageHeroComponent, SectionLabelComponent,
    ScrollRevealDirective, LucideAngularModule
  ],
  templateUrl: './ministries.component.html',
  styleUrls: ['./ministries.component.scss']
})
export class MinistriesComponent implements OnInit {
  ministries: Ministry[] = [];

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

  constructor(private data: StaticDataService, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateMeta({
      title: 'Ministries',
      description: 'Explore the ministries at Deep Waters Church — prayer, worship, kids, outreach and more. Find where you belong.'
    });
    this.ministries = this.data.ministries;
  }

  scrollToConnect(): void {
    document.getElementById('min-connect')?.scrollIntoView({ behavior: 'smooth' });
  }
}
