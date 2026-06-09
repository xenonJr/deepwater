import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

interface InfoItem {
  icon: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'dw-info-bar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent {
  items: InfoItem[] = [
    { icon: 'clock',   title: 'SUNDAYS 10:00 AM',      subtitle: 'Everyone Welcome' },
    { icon: 'map-pin', title: '121 ORCHARD ROAD',       subtitle: 'Doreen VIC 3754' },
    { icon: 'users',   title: 'FAMILY FRIENDLY',        subtitle: 'Kids Church Available' },
    { icon: 'coffee',  title: 'COFFEE & CONNECTION',    subtitle: 'Stay for a cuppa!' }
  ];
}
