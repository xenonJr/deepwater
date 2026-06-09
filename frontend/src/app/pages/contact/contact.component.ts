import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SeoService } from '../../core/services/seo.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'dw-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PageHeroComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  submitting = false;

  constructor(
    private fb: FormBuilder,
    private seo: SeoService,
    private notifications: NotificationService
  ) {}

  ngOnInit(): void {
    this.seo.updateMeta({ title: 'Contact Us', description: "Get in touch with Deep Waters Church." });
    this.form = this.fb.group({
      name:    ['', Validators.required],
      email:   ['', [Validators.required, Validators.email]],
      phone:   [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.submitting = true;
    setTimeout(() => {
      this.notifications.show("Thank you for getting in touch. We'll be in touch soon!", 'success');
      this.form.reset();
      this.submitting = false;
    }, 600);
  }

  get f() { return this.form.controls; }
}
