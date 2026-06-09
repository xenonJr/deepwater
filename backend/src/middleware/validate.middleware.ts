import { Request, Response, NextFunction } from 'express';

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function requireFields(fields: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    for (const field of fields) {
      if (!req.body[field]?.toString().trim()) {
        return res.status(400).json({ success: false, message: `${field} is required.` });
      }
    }
    next();
  };
}
