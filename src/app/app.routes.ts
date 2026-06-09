import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'plan-your-visit',
    loadComponent: () => import('./pages/plan-visit/plan-visit.component').then(m => m.PlanVisitComponent)
  },
  {
    path: 'sermons',
    loadComponent: () => import('./pages/sermons/sermons.component').then(m => m.SermonsComponent)
  },
  {
    path: 'ministries',
    loadComponent: () => import('./pages/ministries/ministries.component').then(m => m.MinistriesComponent)
  },
  {
    path: 'service-times',
    loadComponent: () => import('./pages/service-times/service-times.component').then(m => m.ServiceTimesComponent)
  },
  {
    path: 'events',
    loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent)
  },
  {
    path: 'give',
    loadComponent: () => import('./pages/give/give.component').then(m => m.GiveComponent)
  },
  {
    path: 'prayer-request',
    loadComponent: () => import('./pages/prayer-request/prayer-request.component').then(m => m.PrayerRequestComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent)
  },
  {
    path: 'know-jesus',
    loadComponent: () => import('./pages/know-jesus/know-jesus.component').then(m => m.KnowJesusComponent)
  },
  {
    path: 'testimonies',
    loadComponent: () => import('./pages/testimonies/testimonies.component').then(m => m.TestimoniesComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
