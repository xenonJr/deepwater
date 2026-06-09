import { Request, Response, NextFunction } from 'express';
import db from '../config/database';

export function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const rows = db.prepare(
      'SELECT * FROM sermons WHERE is_published = 1 ORDER BY date_published DESC'
    ).all();
    res.json(rows);
  } catch (err) {
    next(err);
  }
}

export function getFeatured(req: Request, res: Response, next: NextFunction) {
  try {
    const row = db.prepare(
      'SELECT * FROM sermons WHERE is_featured = 1 AND is_published = 1 LIMIT 1'
    ).get();
    if (!row) return res.status(404).json({ success: false, message: 'No featured sermon found.' });
    res.json(row);
  } catch (err) {
    next(err);
  }
}

export function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const row = db.prepare('SELECT * FROM sermons WHERE id = ? AND is_published = 1').get(id);
    if (!row) return res.status(404).json({ success: false, message: 'Sermon not found.' });
    db.prepare('UPDATE sermons SET view_count = view_count + 1 WHERE id = ?').run(id);
    res.json(row);
  } catch (err) {
    next(err);
  }
}
