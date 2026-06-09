import { Router } from 'express';
import { getAll, getFeatured } from '../controllers/events.controller';

const router = Router();

router.get('/', getAll);
router.get('/featured', getFeatured);

export default router;
