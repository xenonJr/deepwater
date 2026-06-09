import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SeoService } from '../../core/services/seo.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'dw-prayer-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PageHeroComponent],
  templateUrl: './prayer-request.component.html',
  styleUrls: ['./prayer-request.component.scss']
})
export class PrayerRequestComponent implements OnInit {
  form!: FormGroup;
  submitting = false;

  constructor(
    private fb: FormBuilder,
    private seo: SeoService,
    private notifications: NotificationService
  ) {}

  ngOnInit(): void {
    this.seo.updateMeta({ title: 'Prayer Request', description: 'Submit a prayer request to the Deep Waters Church prayer team.' });
    this.form = this.fb.group({
      name:           ['', Validators.required],
      email:          ['', Validators.email],
      phone:          [''],
      requestText:    ['', [Validators.required, Validators.minLength(10)]],
      isConfidential: [false],
      isSalvation:    [false],
      isPraise:       [false]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.submitting = true;
    setTimeout(() => {
      this.notifications.show('Your prayer request has been received. We are praying for you.', 'success');
      this.form.reset({ isConfidential: false, isSalvation: false, isPraise: false });
      this.submitting = false;
    }, 600);
  }

  get f() { return this.form.controls; }
}
