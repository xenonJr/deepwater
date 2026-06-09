import { Router } from 'express';
import { getAll } from '../controllers/ministries.controller';

const router = Router();

router.get('/', getAll);

export default router;
