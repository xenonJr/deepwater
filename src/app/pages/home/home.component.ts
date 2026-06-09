import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { InfoBarComponent } from './sections/info-bar/info-bar.component';
import { WelcomeSectionComponent } from './sections/welcome-section/welcome-section.component';
import { WhatToExpectComponent } from './sections/what-to-expect/what-to-expect.component';
import { ContentTripleComponent } from './sections/content-triple/content-triple.component';
import { CtaBannerComponent } from './sections/cta-banner/cta-banner.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'dw-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    InfoBarComponent,
    WelcomeSectionComponent,
    WhatToExpectComponent,
    ContentTripleComponent,
    CtaBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateMeta({
      title: 'Home',
      description: 'A welcoming Christian church community in Doreen. Helping people encounter Jesus, grow in faith, and discover the life-giving hope found in God\'s Word.',
      ogUrl: 'https://deepwaterschurch.com.au'
    });
  }
}
