import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SeoService } from '../../core/services/seo.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'dw-plan-visit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PageHeroComponent],
  templateUrl: './plan-visit.component.html',
  styleUrls: ['./plan-visit.component.scss']
})
export class PlanVisitComponent implements OnInit {
  form!: FormGroup;
  submitting = false;

  constructor(
    private fb: FormBuilder,
    private seo: SeoService,
    private notifications: NotificationService
  ) {}

  ngOnInit(): void {
    this.seo.updateMeta({ title: 'Plan Your Visit', description: "Plan your first visit to Deep Waters Church." });
    this.form = this.fb.group({
      name:             ['', Validators.required],
      email:            ['', [Validators.required, Validators.email]],
      phone:            [''],
      visitorCount:     [1, [Validators.required, Validators.min(1)]],
      hasChildren:      [false],
      childrenAges:     [''],
      questions:        [''],
      preferredContact: ['email', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.submitting = true;
    setTimeout(() => {
      this.notifications.show("We can't wait to meet you! See you Sunday at 10:00am.", 'success');
      this.form.reset({ visitorCount: 1, hasChildren: false, preferredContact: 'email' });
      this.submitting = false;
    }, 600);
  }

  get f() { return this.form.controls; }
}
