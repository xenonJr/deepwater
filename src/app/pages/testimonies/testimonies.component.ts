import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SeoService } from '../../core/services/seo.service';

interface Testimony { name: string; text: string; category: string; }

@Component({
  selector: 'dw-testimonies',
  standalone: true,
  imports: [CommonModule, PageHeroComponent],
  template: `
    <dw-page-hero title="Testimonies" subtitle="Stories of lives changed by God's grace" label="His Works"></dw-page-hero>
    <section class="test-page">
      <div class="test-page__inner">
        <div class="test-card" *ngFor="let t of testimonies">
          <blockquote class="test-card__text">"{{ t.text }}"</blockquote>
          <p class="test-card__name">— {{ t.name }}</p>
          <span class="test-card__tag">{{ t.category }}</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .test-page { padding: 80px 24px; background: #f8f9fb; }
    .test-page__inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 32px; }
    .test-card { background: #fff; border-radius: 8px; padding: 32px; border-top: 4px solid #C9963B; }
    .test-card__text { font-family: 'Playfair Display', Georgia, serif; font-style: italic; font-size: 16px; color: #333; margin: 0 0 16px; line-height: 1.7; }
    .test-card__name { font-family: 'Lato', sans-serif; font-weight: 700; color: #1a2744; margin: 0 0 8px; }
    .test-card__tag { font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #C9963B; }
  `]
})
export class TestimoniesComponent implements OnInit {
  testimonies: Testimony[] = [
    { name: 'Sarah M.', text: 'Coming to Deep Waters Church changed my life. I encountered Jesus in a real way for the first time and have never looked back.', category: 'Salvation' },
    { name: 'James & Lisa T.', text: 'We came searching and found not just answers but a community that loves us. Our marriage was transformed.', category: 'Transformation' },
    { name: 'Michael K.', text: 'After years of struggling alone, the home groups at Deep Waters gave me brothers in Christ who truly care.', category: 'Community' }
  ];

  constructor(private seo: SeoService) {}
  ngOnInit(): void {
    this.seo.updateMeta({ title: 'Testimonies', description: 'Read stories of lives transformed by Jesus at Deep Waters Church.' });
  }
}
