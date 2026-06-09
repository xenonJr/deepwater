import { Injectable } from '@angular/core';
import { Sermon, ChurchEvent, Ministry } from '../models';

@Injectable({ providedIn: 'root' })
export class StaticDataService {

  readonly sermons: Sermon[] = [
    {
      id: 1,
      title: 'Walking by Faith',
      speaker: "Pastor Marco D'Angelo",
      description: 'A powerful message on trusting God in every season of life.',
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnailUrl: 'assets/images/sermon-featured.jpg',
      sermonSeries: 'Faith Series',
      datePublished: '2026-06-01',
      durationMinutes: 45,
      isFeatured: true,
      viewCount: 0
    },
    {
      id: 2,
      title: 'The Deep Waters of Grace',
      speaker: "Pastor Marco D'Angelo",
      description: "Discovering the depths of God's grace and mercy in our lives.",
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnailUrl: '',
      sermonSeries: 'Grace & Truth',
      datePublished: '2026-05-25',
      durationMinutes: 42,
      isFeatured: false,
      viewCount: 0
    },
    {
      id: 3,
      title: 'Rooted and Built Up',
      speaker: "Pastor Marco D'Angelo",
      description: 'How to establish deep roots in Christ through the Word and prayer.',
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnailUrl: '',
      sermonSeries: 'Grace & Truth',
      datePublished: '2026-05-18',
      durationMinutes: 48,
      isFeatured: false,
      viewCount: 0
    }
  ];

  readonly events: ChurchEvent[] = [
    {
      id: 1,
      title: 'Sunday Service',
      eventDate: '2026-06-15',
      eventTime: '10:00am',
      endTime: '11:30am',
      description: 'Everyone is welcome to join us for worship and Bible teaching.',
      location: '121 Orchard Road, Doreen VIC 3754',
      isFeatured: true
    },
    {
      id: 2,
      title: 'Prayer Night',
      eventDate: '2026-06-19',
      eventTime: '7:30pm',
      endTime: '9:00pm',
      description: 'An evening of intercession and worship together.',
      location: '121 Orchard Road, Doreen VIC 3754',
      isFeatured: true
    },
    {
      id: 3,
      title: 'Pentecost Sunday',
      eventDate: '2026-06-22',
      eventTime: '10:00am',
      endTime: '12:00pm',
      description: 'Special celebration service for Pentecost Sunday.',
      location: '121 Orchard Road, Doreen VIC 3754',
      isFeatured: true
    },
    {
      id: 4,
      title: 'Bible Study',
      eventDate: '2026-06-25',
      eventTime: '7:00pm',
      endTime: '8:30pm',
      description: 'Mid-week Bible study for deeper learning and discussion.',
      location: '121 Orchard Road, Doreen VIC 3754',
      isFeatured: false
    }
  ];

  readonly ministries: Ministry[] = [
    { id: 1, name: 'Prayer Ministry',     description: 'Interceding for our church, community and nation.',        iconName: 'hands-praying', displayOrder: 1 },
    { id: 2, name: 'Kids Ministry',       description: 'Fun, safe and age-appropriate programs for children.',      iconName: 'baby',          displayOrder: 2 },
    { id: 3, name: 'Youth & Young Adults',description: 'Building the next generation in faith.',                    iconName: 'users',         displayOrder: 3 },
    { id: 4, name: "Men's Ministry",      description: "Iron sharpening iron — growing together as men of God.",   iconName: 'user',          displayOrder: 4 },
    { id: 5, name: "Women's Ministry",    description: 'Encouraging and equipping women in faith and life.',        iconName: 'heart',         displayOrder: 5 },
    { id: 6, name: 'Home Groups',         description: 'Connecting in smaller groups throughout the week.',         iconName: 'home',          displayOrder: 6 },
    { id: 7, name: 'Worship Team',        description: 'Leading the church in Spirit-filled worship.',              iconName: 'music',         displayOrder: 7 },
    { id: 8, name: 'Outreach Ministry',   description: 'Sharing the love of Jesus in our local community.',         iconName: 'globe',         displayOrder: 8 }
  ];

  getFeaturedSermon(): Sermon {
    return this.sermons.find(s => s.isFeatured) ?? this.sermons[0];
  }

  getUpcomingEvents(limit = 3): ChurchEvent[] {
    return this.events.filter(e => e.isFeatured).slice(0, limit);
  }
}
