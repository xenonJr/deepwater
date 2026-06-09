import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Sermon } from '../../../core/models';
import { TruncateTextPipe } from '../../pipes/truncate-text.pipe';

@Component({
  selector: 'dw-sermon-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TruncateTextPipe],
  template: `
    <article class="sermon-card" [class.sermon-card--featured]="featured">
      <div class="sermon-card__thumb">
        <img *ngIf="sermon.thumbnailUrl; else noThumb"
             [src]="sermon.thumbnailUrl"
             [alt]="sermon.title"
             loading="lazy">
        <ng-template #noThumb>
          <div class="sermon-card__thumb-placeholder"></div>
        </ng-template>
        <a *ngIf="sermon.youtubeUrl"
           [href]="sermon.youtubeUrl"
           target="_blank" rel="noopener noreferrer"
           class="sermon-card__play"
           [attr.aria-label]="'Watch ' + sermon.title">
          <lucide-icon name="play" [size]="26" class="sermon-card__play-icon"></lucide-icon>
        </a>
      </div>
      <div class="sermon-card__body">
        <p class="sermon-card__series" *ngIf="sermon.sermonSeries">{{ sermon.sermonSeries }}</p>
        <h3 class="sermon-card__title">{{ sermon.title }}</h3>
        <p class="sermon-card__speaker">{{ sermon.speaker }}</p>
        <p class="sermon-card__desc">{{ sermon.description | truncateText }}</p>
        <a *ngIf="sermon.youtubeUrl"
           [href]="sermon.youtubeUrl"
           target="_blank" rel="noopener noreferrer"
           class="sermon-card__cta">
          <lucide-icon name="play" [size]="14"></lucide-icon>
          Watch Now
        </a>
      </div>
    </article>
  `,
  styles: [`
    .sermon-card { background: #1a2744; border-radius: 8px; overflow: hidden; color: #fff; }
    .sermon-card__thumb {
      position: relative; aspect-ratio: 16/9;
      background: #0f1729; overflow: hidden;
    }
    .sermon-card__thumb img { width: 100%; height: 100%; object-fit: cover; }
    .sermon-card__thumb-placeholder {
      width: 100%; height: 100%;
      background: linear-gradient(135deg, #1a2744 0%, #0f1729 100%);
    }
    .sermon-card__play {
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      background: rgba(0,0,0,0.3);
      text-decoration: none; transition: background 0.2s;
    }
    .sermon-card__play:hover { background: rgba(0,0,0,0.5); }
    .sermon-card__play-icon {
      background: transparent;
      border: 2px solid rgba(255,255,255,0.85);
      border-radius: 50%; padding: 13px;
      width: 56px; height: 56px;
      color: #fff; stroke-width: 2px;
      transition: transform 0.2s, background 0.2s;
    }
    .sermon-card__play:hover .sermon-card__play-icon {
      transform: scale(1.1);
      background: rgba(255,255,255,0.15);
    }
    .sermon-card__body { padding: 24px; }
    .sermon-card__series {
      font-size: 11px; font-weight: 700; letter-spacing: 2px;
      text-transform: uppercase; color: #C9963B; margin: 0 0 8px;
    }
    .sermon-card__title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 22px; font-weight: 700; margin: 0 0 6px; line-height: 1.3;
    }
    .sermon-card__speaker { font-size: 13px; color: rgba(255,255,255,0.6); margin: 0 0 12px; }
    .sermon-card__desc { font-size: 14px; line-height: 1.7; color: rgba(255,255,255,0.8); margin: 0 0 20px; }
    .sermon-card__cta {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 12px; font-weight: 700; letter-spacing: 1px;
      color: #C9963B; text-decoration: none; text-transform: uppercase;
      border: 1px solid #C9963B; padding: 8px 18px; border-radius: 4px;
      transition: all 0.2s;
    }
    .sermon-card__cta:hover { background: #C9963B; color: #fff; }
    .sermon-card__cta lucide-icon { stroke-width: 2px; }
  `]
})
export class SermonCardComponent {
  @Input() sermon!: Sermon;
  @Input() featured = false;
}
