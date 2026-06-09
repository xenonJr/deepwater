import { Request, Response, NextFunction } from 'express';
import db from '../config/database';

export function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const today = new Date().toISOString().split('T')[0];
    const rows = db.prepare(
      'SELECT * FROM events WHERE is_published = 1 AND event_date >= ? ORDER BY event_date ASC'
    ).all(today);
    res.json(rows);
  } catch (err) {
    next(err);
  }
}

export function getFeatured(req: Request, res: Response, next: NextFunction) {
  try {
    const limit = Number(req.query['limit']) || 3;
    const today = new Date().toISOString().split('T')[0];
    const rows = db.prepare(
      'SELECT * FROM events WHERE is_featured = 1 AND is_published = 1 AND event_date >= ? ORDER BY event_date ASC LIMIT ?'
    ).all(today, limit);
    res.json(rows);
  } catch (err) {
    next(err);
  }
}
