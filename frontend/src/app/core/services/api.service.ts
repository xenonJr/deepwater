import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
  Sermon, ChurchEvent, Ministry, BlogPost,
  PrayerRequestForm, ContactForm, PlanVisitForm, ApiResponse
} from '../models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Sermons
  getSermons(): Observable<Sermon[]> {
    return this.http.get<Sermon[]>(`${this.base}/sermons`).pipe(catchError(this.handleError));
  }

  getFeaturedSermon(): Observable<Sermon> {
    return this.http.get<Sermon>(`${this.base}/sermons/featured`).pipe(catchError(this.handleError));
  }

  // Events
  getEvents(): Observable<ChurchEvent[]> {
    return this.http.get<ChurchEvent[]>(`${this.base}/events`).pipe(catchError(this.handleError));
  }

  getUpcomingEvents(limit: number = 3): Observable<ChurchEvent[]> {
    return this.http.get<ChurchEvent[]>(`${this.base}/events/featured?limit=${limit}`).pipe(catchError(this.handleError));
  }

  // Ministries
  getMinistries(): Observable<Ministry[]> {
    return this.http.get<Ministry[]>(`${this.base}/ministries`).pipe(catchError(this.handleError));
  }

  // Blog
  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.base}/blog`).pipe(catchError(this.handleError));
  }

  getBlogPost(slug: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.base}/blog/${slug}`).pipe(catchError(this.handleError));
  }

  // Forms
  submitPrayerRequest(data: PrayerRequestForm): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.base}/prayer-request`, data).pipe(catchError(this.handleError));
  }

  submitContact(data: ContactForm): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.base}/contact`, data).pipe(catchError(this.handleError));
  }

  submitPlanVisit(data: PlanVisitForm): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.base}/plan-visit`, data).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let message = 'Something went wrong. Please try again.';
    if (error.status === 0) {
      message = 'Unable to connect to the server. Please check your internet connection.';
    } else if (error.error?.message) {
      message = error.error.message;
    } else if (error.status === 429) {
      message = 'Too many requests. Please wait a moment before trying again.';
    } else if (error.status >= 500) {
      message = 'Server error. Please try again later.';
    }
    return throwError(() => new Error(message));
  }
}
