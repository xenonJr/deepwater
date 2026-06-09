import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dw-section-label',
  standalone: true,
  imports: [CommonModule],
  template: `<p class="section-label" [class.section-label--light]="light">{{ text }}</p>`,
  styles: [`
    .section-label {
      font-family: 'Lato', sans-serif;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #C9963B;
      margin: 0 0 12px;
    }
    .section-label--light { color: #C9963B; }
  `]
})
export class SectionLabelComponent {
  @Input() text = '';
  @Input() light = false;
}
