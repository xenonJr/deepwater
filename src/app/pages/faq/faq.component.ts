import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SeoService } from '../../core/services/seo.service';

interface FaqItem { question: string; answer: string; open: boolean; }

@Component({
  selector: 'dw-faq',
  standalone: true,
  imports: [CommonModule, PageHeroComponent],
  template: `
    <dw-page-hero title="FAQ" subtitle="Common questions about Deep Waters Church" label="Questions?"></dw-page-hero>
    <section class="faq-page">
      <div class="faq-page__inner">
        <div class="faq-item" *ngFor="let item of faqs">
          <button class="faq-item__q" (click)="item.open = !item.open" [attr.aria-expanded]="item.open">
            {{ item.question }}
            <span>{{ item.open ? '−' : '+' }}</span>
          </button>
          <div class="faq-item__a" *ngIf="item.open">{{ item.answer }}</div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .faq-page { padding: 80px 24px; }
    .faq-page__inner { max-width: 720px; margin: 0 auto; }
    .faq-item { border-bottom: 1px solid #eee; }
    .faq-item__q {
      width: 100%; text-align: left; background: none; border: none; cursor: pointer;
      font-family: 'Lato', sans-serif; font-size: 16px; font-weight: 700; color: #1a2744;
      padding: 20px 0; display: flex; justify-content: space-between; gap: 16px;
    }
    .faq-item__q:hover { color: #C9963B; }
    .faq-item__a { font-family: 'Lato', sans-serif; font-size: 15px; color: #555; line-height: 1.8; padding: 0 0 20px; }
  `]
})
export class FaqComponent implements OnInit {
  faqs: FaqItem[] = [
    { question: 'What should I wear?', answer: 'Come as you are! We have no dress code — casual is perfectly fine.', open: false },
    { question: 'Is there parking?', answer: 'Yes, we have free onsite parking at 121 Orchard Road, Doreen.', open: false },
    { question: 'Is there something for my kids?', answer: 'Absolutely! We have Kids Ministry for children of all ages during the Sunday service.', open: false },
    { question: 'How long is the service?', answer: 'Our Sunday services run approximately 75–90 minutes.', open: false },
    { question: 'Do I need to book?', answer: 'No booking required — just turn up! But feel free to let us know you\'re coming via our Plan Your Visit page.', open: false },
    { question: 'Are you affiliated with a denomination?', answer: 'Yes, we are affiliated with Full Gospel Australia — an Apostolic movement building healthy churches across the nation.', open: false }
  ];

  constructor(private seo: SeoService) {}
  ngOnInit(): void {
    this.seo.updateMeta({ title: 'FAQ', description: 'Frequently asked questions about Deep Waters Church, Doreen.' });
  }
}
