import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../../core/services/loading.service';

@Component({
  selector: 'dw-loading-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-bar" *ngIf="loading">
      <div class="loading-bar__progress"></div>
    </div>
  `,
  styles: [`
    .loading-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10000;
      height: 3px;
      background: rgba(201,150,59,0.2);
    }
    .loading-bar__progress {
      height: 100%;
      background: #C9963B;
      animation: loadingProgress 1.2s ease-in-out infinite;
    }
    @keyframes loadingProgress {
      0%   { width: 0%; margin-left: 0; }
      50%  { width: 60%; margin-left: 20%; }
      100% { width: 0%; margin-left: 100%; }
    }
  `]
})
export class LoadingBarComponent implements OnInit {
  loading = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.loading$.subscribe(v => this.loading = v);
  }
}
