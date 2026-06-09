import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { SectionLabelComponent } from '../../../../shared/components/section-label/section-label.component';

@Component({
  selector: 'dw-welcome-section',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective, SectionLabelComponent, LucideAngularModule],
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.scss']
})
export class WelcomeSectionComponent {}
