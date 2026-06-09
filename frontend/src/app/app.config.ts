import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  LucideAngularModule, Clock, MapPin, Users, Coffee, Music, Baby, Shirt, Car,
  Timer, Hand, Heart, Home, Globe, User, Calendar, Play, Facebook, Instagram,
  Youtube, Phone, Mail, Church, Check, ArrowRight, ChevronDown, Menu, X
} from 'lucide-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions()),
    provideAnimations(),
    importProvidersFrom(
      LucideAngularModule.pick({
        Clock, MapPin, Users, Coffee, Music, Baby, Shirt, Car, Timer,
        Hand, Heart, Home, Globe, User, Calendar, Play,
        Facebook, Instagram, Youtube, Phone, Mail, Church, Check,
        ArrowRight, ChevronDown, Menu, X
      })
    )
  ]
};
