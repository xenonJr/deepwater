import { Router } from 'express';
import { getAll, getFeatured, getById } from '../controllers/sermons.controller';

const router = Router();

router.get('/', getAll);
router.get('/featured', getFeatured);
router.get('/:id', getById);

export default router;
