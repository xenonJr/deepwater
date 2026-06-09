export interface Sermon {
  id: number;
  title: string;
  speaker: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl: string;
  sermonSeries?: string;
  datePublished: string;
  durationMinutes?: number;
  isFeatured: boolean;
  viewCount: number;
}

export interface ChurchEvent {
  id: number;
  title: string;
  eventDate: string;
  eventTime: string;
  endTime?: string;
  description: string;
  location: string;
  imageUrl?: string;
  isFeatured: boolean;
  registrationUrl?: string;
}

export interface Ministry {
  id: number;
  name: string;
  description: string;
  iconName: string;
  imageUrl?: string;
  contactEmail?: string;
  displayOrder: number;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  featuredImageUrl?: string;
  category: string;
  publishedAt: string;
}

export interface PrayerRequestForm {
  name: string;
  email: string;
  phone?: string;
  requestText: string;
  isConfidential: boolean;
  isSalvation: boolean;
  isPraise: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface PlanVisitForm {
  name: string;
  email: string;
  phone?: string;
  visitorCount: number;
  hasChildren: boolean;
  childrenAges?: string;
  questions?: string;
  preferredContact: 'email' | 'phone';
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

export interface SeoConfig {
  title: string;
  description: string;
  ogImage?: string;
  ogUrl?: string;
}

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface Notification {
  message: string;
  type: NotificationType;
}
