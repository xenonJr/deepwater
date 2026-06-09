import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { SeoService } from '../../core/services/seo.service';
import { LucideAngularModule } from 'lucide-angular';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'dw-service-times',
  standalone: true,
  imports: [
    CommonModule, RouterModule, PageHeroComponent, SectionLabelComponent,
    LucideAngularModule, ScrollRevealDirective
  ],
  templateUrl: './service-times.component.html',
  styleUrls: ['./service-times.component.scss']
})
export class ServiceTimesComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateMeta({
      title: 'Service Times & Location',
      description: 'Find out when and where Deep Waters Church meets. Sunday services at 10:00am in Doreen VIC. Free parking, kids ministry, coffee after.'
    });
  }
}
