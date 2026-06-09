import { Request, Response, NextFunction } from 'express';
import db from '../config/database';

export function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const rows = db.prepare(
      'SELECT * FROM ministries WHERE is_active = 1 ORDER BY display_order ASC'
    ).all();
    res.json(rows);
  } catch (err) {
    next(err);
  }
}
