import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  LucideAngularModule, Clock, MapPin, Users, Coffee, Music, Baby, Shirt, Car,
  Timer, Hand, Heart, House, Globe, User, Calendar, Play, Facebook, Instagram,
  Youtube, Phone, Mail, Church, Check, ArrowRight, ChevronDown, ChevronUp, Menu, X,
  BookOpen, Wind, Triangle, Cross, Droplets, Flame, Star, Shield, Handshake,
  Headphones, FileText, Download, ExternalLink, Volume2, Sun
} from 'lucide-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions(), withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
    provideAnimations(),
    importProvidersFrom(
      LucideAngularModule.pick({
        Clock, MapPin, Users, Coffee, Music, Baby, Shirt, Car, Timer,
        Hand, Heart, House, Globe, User, Calendar, Play,
        Facebook, Instagram, Youtube, Phone, Mail, Church, Check,
        ArrowRight, ChevronDown, ChevronUp, Menu, X,
        BookOpen, Wind, Triangle, Cross, Droplets, Flame, Star, Shield, Handshake,
        Headphones, FileText, Download, ExternalLink, Volume2, Sun
      })
    )
  ]
};
