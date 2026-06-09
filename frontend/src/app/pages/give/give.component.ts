import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'dw-give',
  standalone: true,
  imports: [CommonModule, PageHeroComponent],
  template: `
    <dw-page-hero title="Give" subtitle="Partner with us in ministry" label="Generosity"></dw-page-hero>
    <div class="give-body">
      <h2>Give Online</h2>
      <p>Thank you for your generosity. Your giving makes a real difference in our community and beyond.</p>
      <p><strong>BSB:</strong> 000-000 &nbsp;|&nbsp; <strong>Account:</strong> 00000000</p>
      <p><strong>Account Name:</strong> Deep Waters Church Inc</p>
    </div>
  `,
  styles: [`.give-body { max-width: 720px; margin: 0 auto; padding: 80px 24px; font-family: 'Lato', sans-serif; color: #555; line-height: 1.8; } h2 { font-family: 'Playfair Display', Georgia, serif; color: #1a2744; }`]
})
export class GiveComponent implements OnInit {
  constructor(private seo: SeoService) {}
  ngOnInit(): void {
    this.seo.updateMeta({ title: 'Give', description: 'Partner with Deep Waters Church through your giving.' });
  }
}
