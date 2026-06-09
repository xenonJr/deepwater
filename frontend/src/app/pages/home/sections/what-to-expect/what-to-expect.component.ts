import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

interface ExpectItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'dw-what-to-expect',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollRevealDirective],
  templateUrl: './what-to-expect.component.html',
  styleUrls: ['./what-to-expect.component.scss']
})
export class WhatToExpectComponent {
  items: ExpectItem[] = [
    { icon: 'users',  title: 'Friendly People',     description: "You'll be warmly welcomed." },
    { icon: 'music',  title: 'Spirit-Filled Worship', description: 'Uplifting, authentic and Holy Spirit led.' },
    { icon: 'baby',   title: 'Kids Ministry',        description: 'Fun, safe and age appropriate programs.' },
    { icon: 'shirt',  title: 'Casual Dress',         description: 'Come as you are. No pressure.' },
    { icon: 'car',    title: 'Parking',              description: 'Plenty of onsite parking available.' },
    { icon: 'timer',  title: 'Service Length',       description: 'Our service typically runs for 75–90 mins.' }
  ];
}
