export interface Sermon {
  id: number;
  title: string;
  speaker: string;
  description: string;
  youtube_url: string;
  thumbnail_url: string;
  sermon_series?: string;
  date_published: string;
  duration_minutes?: number;
  is_featured: boolean;
  is_published: boolean;
  view_count: number;
  created_at: string;
}

export interface ChurchEvent {
  id: number;
  title: string;
  event_date: string;
  event_time: string;
  end_time?: string;
  description: string;
  location: string;
  image_url?: string;
  is_featured: boolean;
  is_published: boolean;
  registration_url?: string;
  created_at: string;
}

export interface Ministry {
  id: number;
  name: string;
  description: string;
  icon_name: string;
  image_url?: string;
  contact_email?: string;
  display_order: number;
  is_active: boolean;
}

export interface PrayerRequest {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  request_text: string;
  is_confidential: boolean;
  is_salvation: boolean;
  is_praise: boolean;
  status: 'new' | 'prayed' | 'archived';
  submitted_at: string;
}

export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  is_read: boolean;
  submitted_at: string;
}

export interface PlanVisitSubmission {
  id: number;
  name: string;
  email: string;
  phone?: string;
  visitor_count: number;
  has_children: boolean;
  children_ages?: string;
  questions?: string;
  preferred_contact: 'email' | 'phone';
  submitted_at: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}
