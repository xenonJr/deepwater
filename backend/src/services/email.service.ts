import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

function buildEmailTemplate(title: string, body: string, ctaText?: string, ctaUrl?: string): string {
  const cta = ctaText && ctaUrl
    ? `<div style="text-align:center;margin:30px 0"><a href="${ctaUrl}" style="background:#C9963B;color:#fff;padding:14px 32px;text-decoration:none;font-weight:bold;font-family:Georgia,serif;border-radius:4px">${ctaText}</a></div>`
    : '';
  return `
  <!DOCTYPE html>
  <html>
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
  <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;max-width:600px;width:100%">
          <tr>
            <td style="background:#1a2744;padding:30px 40px;text-align:center">
              <h1 style="color:#C9963B;font-family:Georgia,serif;font-size:22px;margin:0;letter-spacing:3px">DEEP WATERS CHURCH</h1>
              <p style="color:#fff;font-size:13px;margin:6px 0 0;letter-spacing:1px">${title}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px">
              <hr style="border:none;border-top:2px solid #C9963B;margin-bottom:30px">
              ${body}
              ${cta}
              <hr style="border:none;border-top:1px solid #eee;margin-top:30px">
            </td>
          </tr>
          <tr>
            <td style="background:#1a2744;padding:20px 40px;text-align:center">
              <p style="color:#aaa;font-size:12px;margin:0">121 Orchard Road, Doreen VIC 3754 &nbsp;|&nbsp; (03) 9712 4411</p>
              <p style="color:#666;font-size:11px;margin:8px 0 0">Deep Waters Church Incorporated &copy; 2025</p>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>
  </body>
  </html>`;
}

interface PrayerRequestData {
  name: string;
  email?: string;
  phone?: string;
  request_text: string;
  is_confidential: boolean;
  is_salvation: boolean;
  is_praise: boolean;
}

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface PlanVisitData {
  name: string;
  email: string;
  phone?: string;
  visitor_count: number;
  has_children: boolean;
  children_ages?: string;
  questions?: string;
  preferred_contact: string;
}

export async function sendPrayerRequestNotification(data: PrayerRequestData): Promise<void> {
  const banners = [
    data.is_confidential ? `<div style="background:#dc2626;color:#fff;padding:12px 20px;border-radius:4px;margin-bottom:16px;font-weight:bold">⚠️ CONFIDENTIAL REQUEST — Handle with care</div>` : '',
    data.is_salvation ? `<div style="background:#b45309;color:#fff;padding:12px 20px;border-radius:4px;margin-bottom:16px;font-weight:bold">🙏 SALVATION REQUEST — Please follow up personally</div>` : '',
    data.is_praise ? `<div style="background:#15803d;color:#fff;padding:12px 20px;border-radius:4px;margin-bottom:16px;font-weight:bold">🎉 PRAISE REPORT</div>` : ''
  ].join('');

  const body = `
    ${banners}
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px 0;color:#555;width:140px"><strong>Name:</strong></td><td style="padding:8px 0">${data.name}</td></tr>
      ${data.email ? `<tr><td style="padding:8px 0;color:#555"><strong>Email:</strong></td><td style="padding:8px 0">${data.email}</td></tr>` : ''}
      ${data.phone ? `<tr><td style="padding:8px 0;color:#555"><strong>Phone:</strong></td><td style="padding:8px 0">${data.phone}</td></tr>` : ''}
    </table>
    <div style="background:#f9f9f9;border-left:4px solid #C9963B;padding:16px 20px;margin-top:20px;border-radius:0 4px 4px 0">
      <p style="margin:0;color:#333;line-height:1.7">${data.request_text}</p>
    </div>`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Prayer Request — Deep Waters Church',
    html: buildEmailTemplate('New Prayer Request', body)
  });
}

export async function sendContactNotification(data: ContactData): Promise<void> {
  const body = `
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px 0;color:#555;width:140px"><strong>Name:</strong></td><td style="padding:8px 0">${data.name}</td></tr>
      <tr><td style="padding:8px 0;color:#555"><strong>Email:</strong></td><td style="padding:8px 0">${data.email}</td></tr>
      ${data.phone ? `<tr><td style="padding:8px 0;color:#555"><strong>Phone:</strong></td><td style="padding:8px 0">${data.phone}</td></tr>` : ''}
    </table>
    <div style="background:#f9f9f9;border-left:4px solid #C9963B;padding:16px 20px;margin-top:20px;border-radius:0 4px 4px 0">
      <p style="margin:0;color:#333;line-height:1.7">${data.message}</p>
    </div>`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Contact Message — Deep Waters Church',
    html: buildEmailTemplate('New Contact Message', body)
  });
}

export async function sendPlanVisitNotification(data: PlanVisitData): Promise<void> {
  const body = `
    <div style="background:#1a2744;color:#C9963B;padding:16px 20px;border-radius:4px;margin-bottom:20px;text-align:center">
      <strong style="font-size:18px">👥 ${data.visitor_count} visitor${data.visitor_count !== 1 ? 's' : ''} planning to attend${data.has_children ? ' — with children!' : ''}</strong>
    </div>
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px 0;color:#555;width:160px"><strong>Name:</strong></td><td style="padding:8px 0">${data.name}</td></tr>
      <tr><td style="padding:8px 0;color:#555"><strong>Email:</strong></td><td style="padding:8px 0">${data.email}</td></tr>
      ${data.phone ? `<tr><td style="padding:8px 0;color:#555"><strong>Phone:</strong></td><td style="padding:8px 0">${data.phone}</td></tr>` : ''}
      <tr><td style="padding:8px 0;color:#555"><strong>Has Children:</strong></td><td style="padding:8px 0">${data.has_children ? 'Yes' : 'No'}${data.children_ages ? ` (Ages: ${data.children_ages})` : ''}</td></tr>
      <tr><td style="padding:8px 0;color:#555"><strong>Preferred Contact:</strong></td><td style="padding:8px 0;text-transform:capitalize">${data.preferred_contact}</td></tr>
    </table>
    ${data.questions ? `<div style="background:#f9f9f9;border-left:4px solid #C9963B;padding:16px 20px;margin-top:20px;border-radius:0 4px 4px 0"><strong>Questions:</strong><p style="margin:8px 0 0;color:#333;line-height:1.7">${data.questions}</p></div>` : ''}`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Visit Planned — Deep Waters Church',
    html: buildEmailTemplate('Someone is Planning to Visit!', body)
  });
}

export async function sendConfirmationEmail(
  to: string,
  name: string,
  type: 'prayer' | 'contact' | 'visit'
): Promise<void> {
  const configs = {
    prayer: {
      subject: "We're praying for you — Deep Waters Church",
      title: 'Your Prayer Request',
      body: `<p style="font-size:16px;color:#333;line-height:1.8">Dear ${name},</p>
        <p style="color:#333;line-height:1.8">Thank you for trusting us with your prayer request. Our prayer team has been notified and will be lifting you up before God.</p>
        <p style="color:#333;line-height:1.8">You are not alone — our whole church family is standing with you. <em>"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." — Philippians 4:6</em></p>
        <p style="color:#333;line-height:1.8">With love,<br><strong>The Deep Waters Church Prayer Team</strong></p>`,
      ctaText: 'Visit Us This Sunday',
      ctaUrl: 'https://deepwaterschurch.com.au/plan-your-visit'
    },
    contact: {
      subject: "We'll be in touch soon — Deep Waters Church",
      title: 'Thanks for Getting in Touch',
      body: `<p style="font-size:16px;color:#333;line-height:1.8">Dear ${name},</p>
        <p style="color:#333;line-height:1.8">Thank you for reaching out to Deep Waters Church. We've received your message and one of our team members will be in touch with you shortly — usually within 1–2 business days.</p>
        <p style="color:#333;line-height:1.8">In the meantime, we'd love for you to join us this Sunday at 10:00am at 121 Orchard Road, Doreen VIC 3754.</p>
        <p style="color:#333;line-height:1.8">Blessings,<br><strong>Deep Waters Church</strong></p>`,
      ctaText: 'Plan Your Visit',
      ctaUrl: 'https://deepwaterschurch.com.au/plan-your-visit'
    },
    visit: {
      subject: "We can't wait to meet you! — Deep Waters Church",
      title: "See You Sunday!",
      body: `<p style="font-size:16px;color:#333;line-height:1.8">Dear ${name},</p>
        <p style="color:#333;line-height:1.8">We are so excited that you're planning to visit Deep Waters Church! You are going to love it here.</p>
        <div style="background:#1a2744;color:#fff;padding:20px 24px;border-radius:6px;margin:24px 0">
          <p style="margin:0;font-size:18px;font-weight:bold;color:#C9963B">📅 Sunday Service</p>
          <p style="margin:8px 0 0">🕙 10:00am — 11:30am</p>
          <p style="margin:4px 0 0">📍 121 Orchard Road, Doreen VIC 3754</p>
          <p style="margin:4px 0 0">☕ Come early for coffee & connection!</p>
        </div>
        <p style="color:#333;line-height:1.8">Our welcome team will be looking out for you. Don't hesitate to say hi — we're so glad you're coming!</p>
        <p style="color:#333;line-height:1.8">See you Sunday,<br><strong>The Deep Waters Church Team</strong></p>`,
      ctaText: 'Get Directions',
      ctaUrl: 'https://maps.google.com/?q=121+Orchard+Road+Doreen+VIC+3754'
    }
  };

  const { subject, title, body, ctaText, ctaUrl } = configs[type];

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html: buildEmailTemplate(title, body, ctaText, ctaUrl)
  });
}
