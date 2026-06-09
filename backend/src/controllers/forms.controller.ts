import { Request, Response, NextFunction } from 'express';
import db from '../config/database';
import {
  sendPrayerRequestNotification,
  sendContactNotification,
  sendPlanVisitNotification,
  sendConfirmationEmail
} from '../services/email.service';

export function submitPrayerRequest(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, phone, requestText, isConfidential, isSalvation, isPraise } = req.body;

    if (!name?.trim()) {
      return res.status(400).json({ success: false, message: 'Name is required.' });
    }
    if (!requestText?.trim() || requestText.trim().length < 10) {
      return res.status(400).json({ success: false, message: 'Prayer request must be at least 10 characters.' });
    }

    db.prepare(
      `INSERT INTO prayer_requests (name, email, phone, request_text, is_confidential, is_salvation, is_praise)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).run(name, email || null, phone || null, requestText, isConfidential ? 1 : 0, isSalvation ? 1 : 0, isPraise ? 1 : 0);

    const data = {
      name, email, phone,
      request_text: requestText,
      is_confidential: !!isConfidential,
      is_salvation: !!isSalvation,
      is_praise: !!isPraise
    };

    sendPrayerRequestNotification(data).catch(console.error);
    if (email) sendConfirmationEmail(email, name, 'prayer').catch(console.error);

    res.json({ success: true, message: 'Your prayer request has been received. We are praying for you.' });
  } catch (err) {
    next(err);
  }
}

export function submitContact(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, phone, message } = req.body;

    if (!name?.trim()) return res.status(400).json({ success: false, message: 'Name is required.' });
    if (!email?.trim()) return res.status(400).json({ success: false, message: 'Email is required.' });
    if (!message?.trim()) return res.status(400).json({ success: false, message: 'Message is required.' });

    db.prepare(
      'INSERT INTO contact_submissions (name, email, phone, message) VALUES (?, ?, ?, ?)'
    ).run(name, email, phone || null, message);

    sendContactNotification({ name, email, phone, message }).catch(console.error);
    sendConfirmationEmail(email, name, 'contact').catch(console.error);

    res.json({ success: true, message: "Thank you for getting in touch. We'll be in touch soon!" });
  } catch (err) {
    next(err);
  }
}

export function submitPlanVisit(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, phone, visitorCount, hasChildren, childrenAges, questions, preferredContact } = req.body;

    if (!name?.trim()) return res.status(400).json({ success: false, message: 'Name is required.' });
    if (!email?.trim()) return res.status(400).json({ success: false, message: 'Email is required.' });

    db.prepare(
      `INSERT INTO plan_visit_submissions (name, email, phone, visitor_count, has_children, children_ages, questions, preferred_contact)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    ).run(name, email, phone || null, visitorCount || 1, hasChildren ? 1 : 0, childrenAges || null, questions || null, preferredContact || 'email');

    const data = {
      name, email, phone,
      visitor_count: visitorCount || 1,
      has_children: !!hasChildren,
      children_ages: childrenAges,
      questions,
      preferred_contact: preferredContact || 'email'
    };

    sendPlanVisitNotification(data).catch(console.error);
    sendConfirmationEmail(email, name, 'visit').catch(console.error);

    res.json({ success: true, message: "We can't wait to meet you! See you Sunday at 10:00am." });
  } catch (err) {
    next(err);
  }
}
