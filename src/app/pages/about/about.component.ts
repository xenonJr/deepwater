import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'dw-about',
  standalone: true,
  imports: [CommonModule, PageHeroComponent],
  template: `
    <dw-page-hero
      title="About Us"
      subtitle="Meet the Deep Waters Church community"
      label="Our Story">
    </dw-page-hero>
    <div class="page-body">
      <h2>Our Story</h2>
      <p>Deep Waters Church is a Spirit-filled, Christ-centred community in Doreen, Victoria. We exist to help people encounter Jesus, grow in faith, and discover the life-giving hope found in God's Word.</p>
    </div>
  `,
  styles: [`.page-body { max-width: 960px; margin: 0 auto; padding: 80px 24px; font-family: 'Lato', sans-serif; } h2 { font-family: 'Playfair Display', Georgia, serif; color: #1a2744; }`]
})
export class AboutComponent implements OnInit {
  constructor(private seo: SeoService) {}
  ngOnInit(): void {
    this.seo.updateMeta({ title: 'About Us', description: 'Learn about Deep Waters Church, our story, vision, values and leadership team.' });
  }
}
