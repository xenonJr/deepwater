import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dw-page-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-hero" [style.backgroundImage]="bgImage ? 'url(' + bgImage + ')' : ''">
      <div class="page-hero__overlay"></div>
      <div class="page-hero__content">
        <p class="page-hero__label" *ngIf="label">{{ label }}</p>
        <h1 class="page-hero__title">{{ title }}</h1>
        <p class="page-hero__subtitle" *ngIf="subtitle">{{ subtitle }}</p>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      position: relative;
      height: 340px;
      background: #1a2744 center/cover no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .page-hero__overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(26,39,68,0.85) 0%, rgba(26,39,68,0.6) 100%);
    }
    .page-hero__content {
      position: relative;
      z-index: 1;
      padding: 0 24px;
    }
    .page-hero__label {
      font-family: 'Lato', sans-serif;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #C9963B;
      margin: 0 0 12px;
    }
    .page-hero__title {
      font-family: 'Cinzel', Georgia, serif;
      font-size: clamp(32px, 5vw, 52px);
      font-weight: 700;
      color: #fff;
      margin: 0 0 16px;
      line-height: 1.15;
    }
    .page-hero__subtitle {
      font-family: 'Lato', sans-serif;
      font-size: 18px;
      color: rgba(255,255,255,0.85);
      margin: 0;
      max-width: 600px;
    }
  `]
})
export class PageHeroComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() label = '';
  @Input() bgImage = '';
}
