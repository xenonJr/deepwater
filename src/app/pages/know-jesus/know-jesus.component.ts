import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'dw-know-jesus',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeroComponent],
  template: `
    <dw-page-hero title="Know Jesus" subtitle="The most important decision you'll ever make" label="New Life"></dw-page-hero>
    <section class="kj">
      <div class="kj__inner">
        <p class="kj__verse">"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." — John 3:16</p>
        <h2>Starting a Relationship with Jesus</h2>
        <p>God loves you unconditionally and desires a personal relationship with you. No matter where you've been or what you've done, you are welcome.</p>
        <p>If you'd like to know more, we'd love to talk with you. Come visit us any Sunday or reach out.</p>
        <a routerLink="/contact" class="kj__cta">Talk to Someone →</a>
      </div>
    </section>
  `,
  styles: [`
    .kj { padding: 80px 24px; }
    .kj__inner { max-width: 720px; margin: 0 auto; font-family: 'Lato', sans-serif; color: #555; line-height: 1.8; font-size: 16px; }
    .kj__verse { font-style: italic; font-size: 18px; color: #1a2744; border-left: 4px solid #C9963B; padding: 16px 20px; background: #f8f9fb; border-radius: 0 4px 4px 0; margin-bottom: 32px; }
    h2 { font-family: 'Playfair Display', Georgia, serif; color: #1a2744; font-size: 28px; }
    .kj__cta { display: inline-block; margin-top: 24px; padding: 14px 28px; background: #C9963B; color: #fff; text-decoration: none; border-radius: 4px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; font-size: 14px; }
  `]
})
export class KnowJesusComponent implements OnInit {
  constructor(private seo: SeoService) {}
  ngOnInit(): void {
    this.seo.updateMeta({ title: 'Know Jesus', description: 'Learn about starting a relationship with Jesus Christ at Deep Waters Church.' });
  }
}
