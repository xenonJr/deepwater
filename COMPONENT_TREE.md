# Deep Waters Church — Component Tree

```
AppComponent
├── LoadingBarComponent (global, fixed top, gold colour)
├── HeaderComponent (standalone, sticky, fixed)
│   ├── LogoComponent (inline in header template)
│   ├── NavMenuComponent (desktop — hidden < 1024px)
│   └── MobileNavComponent (hamburger + slide drawer)
│
├── router-outlet
│   │
│   ├── HomeComponent (eager)
│   │   ├── HeroSectionComponent
│   │   │   └── [CTA buttons: Join Us / Watch Online]
│   │   ├── InfoBarComponent (4-column service card, negative margin overlap)
│   │   ├── WelcomeSectionComponent
│   │   ├── WhatToExpectComponent
│   │   │   └── ExpectCard (×6, scroll-reveal with stagger)
│   │   ├── ContentTripleComponent
│   │   │   ├── SermonCardComponent (featured, navy bg)
│   │   │   ├── EventCardComponent (upcoming ×3)
│   │   │   └── MinistryCardComponent (icons ×8, 4-col grid)
│   │   └── CtaBannerComponent (full-width navy)
│   │
│   ├── AboutComponent (lazy)
│   │   └── PageHeroComponent
│   │
│   ├── PlanVisitComponent (lazy)
│   │   ├── PageHeroComponent
│   │   └── PlanVisitForm (Reactive Form — name, email, visitors, children)
│   │
│   ├── SermonsComponent (lazy)
│   │   ├── PageHeroComponent
│   │   └── SermonCardComponent (×n, auto-fill grid)
│   │
│   ├── MinistriesComponent (lazy)
│   │   ├── PageHeroComponent
│   │   └── MinistryCardComponent (×n)
│   │
│   ├── EventsComponent (lazy)
│   │   ├── PageHeroComponent
│   │   └── EventCardComponent (×n)
│   │
│   ├── GiveComponent (lazy)
│   │   └── PageHeroComponent
│   │
│   ├── PrayerRequestComponent (lazy)
│   │   ├── PageHeroComponent
│   │   └── PrayerForm (Reactive Form — name, request, confidential, salvation, praise flags)
│   │
│   ├── ContactComponent (lazy)
│   │   ├── PageHeroComponent
│   │   └── ContactForm (Reactive Form — name, email, phone, message)
│   │
│   ├── FaqComponent (lazy)
│   │   ├── PageHeroComponent
│   │   └── AccordionItems (click-toggle, no external dep)
│   │
│   ├── KnowJesusComponent (lazy)
│   │   └── PageHeroComponent
│   │
│   └── TestimoniesComponent (lazy)
│       ├── PageHeroComponent
│       └── TestimonyCard (×n)
│
├── FooterComponent (standalone)
│   ├── Brand column (logo, tagline, social icons)
│   ├── Quick Links column
│   ├── Service Times & Contact column
│   ├── Resources column
│   └── Affiliated With column (Full Gospel Australia)
│
└── NotificationToastComponent (global, fixed bottom-right)
```

---

## Shared Components (`src/app/shared/components/`)

| Component | Purpose |
|---|---|
| `PageHeroComponent` | Reusable inner-page hero banner (title, subtitle, label, optional bg image) |
| `SermonCardComponent` | Sermon thumbnail + play button + title + speaker + description |
| `EventCardComponent` | Date badge + event title + time + description |
| `MinistryCardComponent` | Icon emoji + name + description |
| `LoadingSkeletonComponent` | Shimmer skeleton loader for cards while API loads |
| `SectionLabelComponent` | Gold uppercase eyebrow label (reusable) |
| `NotificationToastComponent` | Fixed toast for form submission feedback |
| `LoadingBarComponent` | Gold progress bar at top of page on API calls |

---

## Shared Directives (`src/app/shared/directives/`)

| Directive | Purpose |
|---|---|
| `ScrollRevealDirective` | `[dwReveal]` — fade-in-up on IntersectionObserver, `[dwRevealDelay]` for stagger |
| `LazyImageDirective` | `img[dwLazyImage]` — lazy loads image src via IntersectionObserver |

---

## Shared Pipes (`src/app/shared/pipes/`)

| Pipe | Purpose |
|---|---|
| `FormatDatePipe` | `formatDate` — formats ISO date to "MAY 25" |
| `TruncateTextPipe` | `truncateText:120` — truncates sermon descriptions |
| `YoutubeIdPipe` | `youtubeId` — extracts YouTube video ID from full URL |

---

## Core Services (`src/app/core/services/`)

| Service | Purpose |
|---|---|
| `ApiService` | Centralised HTTP calls to backend API |
| `SeoService` | Sets page title + meta tags per route |
| `NotificationService` | BehaviorSubject toast notifications |
| `LoadingService` | BehaviorSubject global loading state |

---

## Core Interceptors (`src/app/core/interceptors/`)

| Interceptor | Purpose |
|---|---|
| `loadingInterceptor` | Shows/hides LoadingBar on every HTTP request |
