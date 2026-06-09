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
    { id: 1, name: 'Prayer Ministry',      description: 'Interceding for our church, community and nation. We believe prayer moves mountains.',                              iconName: 'hands-praying', displayOrder: 1 },
    { id: 2, name: "Men's Ministry",       description: "Iron sharpening iron. A space for men to grow in faith, accountability, and godly character.",                     iconName: 'user',          displayOrder: 2 },
    { id: 3, name: "Women's Ministry",     description: 'Encouraging and equipping women to walk boldly in their God-given identity and calling.',                           iconName: 'heart',         displayOrder: 3 },
    { id: 4, name: 'Young Adults',         description: 'A community for 18–35s to encounter Jesus, build friendships, and pursue purpose together.',                       iconName: 'users',         displayOrder: 4 },
    { id: 5, name: 'Home Groups',          description: 'Smaller circles of community meeting mid-week for life, laughter and growing in the Word together.',               iconName: 'home',          displayOrder: 5 },
    { id: 6, name: 'Worship Team',         description: 'Leading the church in Spirit-filled, Christ-exalting worship every Sunday and at special events.',                 iconName: 'music',         displayOrder: 6 },
    { id: 7, name: "Children's Ministry",  description: 'Safe, fun and age-appropriate programs helping kids encounter Jesus and grow in faith.',                            iconName: 'baby',          displayOrder: 7 },
    { id: 8, name: 'Outreach Ministry',    description: 'Taking the love of Jesus beyond our walls — serving the local community and sharing the Gospel.',                  iconName: 'globe',         displayOrder: 8 },
    { id: 9, name: 'Pastoral Care',        description: 'Walking alongside people through every season of life — offering prayer, support and Christ-centred counselling.', iconName: 'cross',         displayOrder: 9 }
  ];

  getFeaturedSermon(): Sermon {
    return this.sermons.find(s => s.isFeatured) ?? this.sermons[0];
  }

  getUpcomingEvents(limit = 3): ChurchEvent[] {
    return this.events.filter(e => e.isFeatured).slice(0, limit);
  }
}
