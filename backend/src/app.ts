import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import router from './routes';
import { generalLimiter, formLimiter } from './middleware/rateLimit.middleware';
import { initDb } from './config/init-db';

initDb();

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:4200' }));
app.use(express.json());

app.use('/api', generalLimiter);
app.use('/api/prayer-request', formLimiter);
app.use('/api/contact', formLimiter);
app.use('/api/plan-visit', formLimiter);

app.use('/api', router);

app.use((_req: Request, res: Response) => {
  res.status(404).json({ success: false, message: 'Route not found.', statusCode: 404 });
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'An unexpected error occurred.',
    statusCode
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Deep Waters Church API running on port ${PORT}`));

export default app;
