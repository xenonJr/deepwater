import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[dwReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input('dwRevealDelay') delay = 0;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.el.nativeElement;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';

    // On mobile, halve the stagger delay so stacked items don't lag
    const isMobile = window.innerWidth < 768;
    const effectiveDelay = isMobile ? Math.min(this.delay * 0.4, 80) : this.delay;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.transition = 'opacity 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, effectiveDelay);
            this.observer.disconnect();
          }
        });
      },
      { threshold: 0.08 }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
