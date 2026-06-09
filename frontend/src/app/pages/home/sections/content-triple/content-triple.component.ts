import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StaticDataService } from '../../../../core/services/static-data.service';
import { Sermon, ChurchEvent, Ministry } from '../../../../core/models';
import { SermonCardComponent } from '../../../../shared/components/sermon-card/sermon-card.component';
import { EventCardComponent } from '../../../../shared/components/event-card/event-card.component';
import { MinistryCardComponent } from '../../../../shared/components/ministry-card/ministry-card.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'dw-content-triple',
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    SermonCardComponent, EventCardComponent, MinistryCardComponent,
    ScrollRevealDirective
  ],
  templateUrl: './content-triple.component.html',
  styleUrls: ['./content-triple.component.scss']
})
export class ContentTripleComponent implements OnInit {
  featuredSermon!: Sermon;
  upcomingEvents: ChurchEvent[] = [];
  ministries: Ministry[] = [];

  constructor(private data: StaticDataService) {}

  ngOnInit(): void {
    this.featuredSermon = this.data.getFeaturedSermon();
    this.upcomingEvents = this.data.getUpcomingEvents(3);
    this.ministries = this.data.ministries;
  }
}
