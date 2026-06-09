import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'dw-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, PageHeroComponent, SectionLabelComponent, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  visionPillars = [
    { icon: 'book-open', title: 'Word-Centred',   desc: 'The Bible is our anchor. Every decision, every message, every ministry flows from Scripture.' },
    { icon: 'wind',      title: 'Spirit-Led',      desc: 'We welcome the presence and power of the Holy Spirit in every gathering and in our daily lives.' },
    { icon: 'heart',     title: 'People-Focused',  desc: 'People matter more than programs. We value genuine relationship over religious performance.' }
  ];

  beliefs = [
    { icon: 'book-open', title: 'The Holy Scripture',  body: 'The Bible is the inspired, infallible Word of God and the supreme authority for faith and life.',         ref: '2 Timothy 3:16–17' },
    { icon: 'triangle',  title: 'The Trinity',         body: 'We believe in one God — eternally existing as Father, Son, and Holy Spirit.',                             ref: 'Matthew 28:19' },
    { icon: 'cross',     title: 'Salvation by Grace',  body: 'Salvation is by grace through faith in Jesus Christ alone — His death, burial, and resurrection.',        ref: 'Ephesians 2:8–9' },
    { icon: 'droplets',  title: 'Water Baptism',       body: 'We practise believer\'s baptism by immersion as an outward declaration of an inward transformation.',     ref: 'Romans 6:4' },
    { icon: 'flame',     title: 'The Holy Spirit',     body: 'We believe in the baptism of the Holy Spirit with the evidence of spiritual gifts for believers today.',   ref: 'Acts 2:38–39' },
    { icon: 'users',     title: 'The Church',          body: 'The Church is the body of Christ — called to worship, grow together, and reach the lost.',                ref: 'Ephesians 4:11–12' },
    { icon: 'star',      title: 'The Second Coming',   body: 'We believe in the personal, visible return of Jesus Christ to establish His eternal kingdom.',             ref: '1 Thessalonians 4:16' },
    { icon: 'shield',    title: 'Divine Healing',      body: 'Healing is provided for in the atonement of Christ, and we pray for the sick in faith and trust.',        ref: 'James 5:14–15' }
  ];

  values = [
    { icon: 'book-open', title: 'Scripture-Centred', body: 'We measure everything by the Word of God. Sound Bible teaching is at the heart of all we do.' },
    { icon: 'wind',      title: 'Spirit-Led',        body: 'We create space for the Holy Spirit to move, lead, and transform lives in every gathering.' },
    { icon: 'handshake', title: 'Authentically Welcoming', body: 'No pretence. No performance. You are welcome exactly as you are — and loved enough not to stay that way.' },
    { icon: 'map-pin',   title: 'Community-Rooted',  body: 'We are for Doreen. We serve our neighbourhood, love our city, and look for ways to be the hands and feet of Jesus.' }
  ];

  team = [
    {
      name: 'Pastor Marco D\'Angelo',
      role: 'Senior Pastor',
      photo: 'assets/images/about-pastor.jpg',
      bio: 'Marco has been in pastoral ministry for over 15 years. His passion is for people to encounter the transforming power of Jesus and discover their God-given purpose. He leads Deep Waters with a shepherd\'s heart.'
    },
    {
      name: 'Sarah D\'Angelo',
      role: 'Worship & Creative Director',
      photo: 'assets/images/about-leader2.jpg',
      bio: 'Sarah leads our worship team with creativity and a deep love for the presence of God. She oversees all creative ministries and is passionate about creating spaces where people can genuinely encounter Jesus.'
    }
  ];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateMeta({
      title: 'About Us',
      description: 'Learn about Deep Waters Church — our story, vision, core beliefs, values, and leadership team in Doreen, VIC.'
    });
  }
}
