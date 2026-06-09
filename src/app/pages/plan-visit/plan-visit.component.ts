import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { SeoService } from '../../core/services/seo.service';
import { NotificationService } from '../../core/services/notification.service';
import { LucideAngularModule } from 'lucide-angular';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'dw-plan-visit',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, PageHeroComponent,
    SectionLabelComponent, LucideAngularModule, ScrollRevealDirective
  ],
  templateUrl: './plan-visit.component.html',
  styleUrls: ['./plan-visit.component.scss']
})
export class PlanVisitComponent implements OnInit {
  form!: FormGroup;
  submitting = false;
  openFaq: number | null = null;

  quickInfo = [
    { icon: 'clock',   label: 'Sunday Service',      value: '10:00am – 11:30am',              delay: 0 },
    { icon: 'map-pin', label: 'Location',             value: '121 Orchard Road, Doreen VIC 3754', delay: 100 },
    { icon: 'car',     label: 'Parking',              value: 'Free onsite parking available',  delay: 200 },
    { icon: 'baby',    label: "Children's Ministry",  value: 'Available every Sunday',         delay: 300 }
  ];

  timeline = [
    { time: '9:50am',  title: 'Doors Open',          desc: 'Arrive early, grab a coffee and find a seat. Our welcome team will greet you at the door.' },
    { time: '10:00am', title: 'Service Begins',       desc: 'We open in prayer together as a church family.' },
    { time: '10:05am', title: 'Worship',              desc: 'Contemporary, Spirit-led worship led by our worship team — expect 3–4 songs of praise.' },
    { time: '10:30am', title: 'Message',              desc: 'A Bible-based message from our pastor — practical, relevant and Christ-centred.' },
    { time: '11:15am', title: 'Response & Prayer',    desc: 'An opportunity to respond, receive prayer, or simply reflect.' },
    { time: '11:30am', title: 'Connect Over Coffee',  desc: 'Service concludes. Stay for coffee, tea and connection — one of our favourite parts!' }
  ];

  worshipBadges = ['Contemporary Music', 'Spirit-Led', 'Live Band', 'Screen Lyrics', 'Welcoming Atmosphere'];

  kidsPoints = [
    'Age-appropriate programs from birth through to Year 6',
    'Qualified, background-checked volunteers',
    'Safe and supervised check-in/check-out process',
    'Fun, engaging Bible-based teaching',
    'Your child will be paged if needed during the service'
  ];

  faqs = [
    {
      q: 'Will I be singled out as a first-timer?',
      a: "Absolutely not. We won't put you on the spot or make you stand up. Our welcome team will gently introduce themselves and make sure you feel at home — at your own pace."
    },
    {
      q: 'How long does the service run?',
      a: 'Our Sunday service runs approximately 75–90 minutes, finishing around 11:30am. Many people stay on for coffee and connection after.'
    },
    {
      q: 'Can I bring my children?',
      a: "Yes! Children are very welcome. We have a dedicated Children's Ministry every Sunday for kids from birth through Year 6. Check in at the Kids desk when you arrive."
    },
    {
      q: 'Do I need to bring a Bible?',
      a: 'Not at all. All scripture references are displayed on screen throughout the service. You are welcome to bring your own Bible or Bible app if you prefer.'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private seo: SeoService,
    private notifications: NotificationService
  ) {}

  ngOnInit(): void {
    this.seo.updateMeta({
      title: 'Plan Your Visit',
      description: 'Plan your first visit to Deep Waters Church in Doreen VIC. Everything you need to know about Sunday services, kids ministry, parking and more.'
    });
    this.form = this.fb.group({
      name:         ['', Validators.required],
      email:        ['', [Validators.required, Validators.email]],
      phone:        [''],
      visitorCount: [1, [Validators.required, Validators.min(1)]],
      hasChildren:  [false],
      childrenAges: [''],
      questions:    ['']
    });
  }

  toggleFaq(i: number): void {
    this.openFaq = this.openFaq === i ? null : i;
  }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.submitting = true;
    setTimeout(() => {
      this.notifications.show("We can't wait to meet you! See you Sunday at 10:00am.", 'success');
      this.form.reset({ visitorCount: 1, hasChildren: false });
      this.submitting = false;
    }, 600);
  }

  get f() { return this.form.controls; }
}
