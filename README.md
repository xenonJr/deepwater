# Deep Waters Church — Website

A full-stack church website built with Angular 18 (frontend) and Node.js/Express (backend), using MySQL for data storage.

## Quick Start

### Prerequisites
- Node.js 20+
- MySQL 8+
- Angular CLI 18: `npm install -g @angular/cli`

### Database Setup
```bash
mysql -u root -p < backend/src/config/schema.sql
```

### Backend
```bash
cd backend
cp .env.example .env
# Edit .env with your database credentials and email settings
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
# Open http://localhost:4200
```

## Architecture

```
Deep3/
├── frontend/          # Angular 18 standalone app
│   └── src/app/
│       ├── core/      # Services, models, interceptors
│       ├── shared/    # Reusable components, directives, pipes
│       ├── layout/    # Header + Footer
│       └── pages/     # Route components (lazy-loaded)
│
├── backend/           # Node.js + Express API
│   └── src/
│       ├── config/    # DB connection + schema.sql
│       ├── controllers/
│       ├── routes/
│       ├── services/  # Email service (Nodemailer)
│       └── middleware/ # Rate limiting, validation
│
└── COMPONENT_TREE.md  # Full component architecture
```

## Design System

| Token | Value |
|---|---|
| Navy | `#1a2744` |
| Gold | `#C9963B` |
| Heading font | Cinzel (Cinzel — Google Fonts) |
| Body font | Lato (Google Fonts) |
| Accent font | Playfair Display (Google Fonts) |

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/sermons` | All published sermons |
| GET | `/api/sermons/featured` | Featured sermon |
| GET | `/api/events` | Upcoming events |
| GET | `/api/events/featured` | Featured events (limit param) |
| GET | `/api/ministries` | All active ministries |
| POST | `/api/prayer-request` | Submit prayer request |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/plan-visit` | Submit plan visit form |
