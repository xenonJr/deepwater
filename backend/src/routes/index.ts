import { Router } from 'express';
import sermonsRouter from './sermons.routes';
import eventsRouter from './events.routes';
import ministriesRouter from './ministries.routes';
import formsRouter from './forms.routes';

const router = Router();

router.use('/sermons', sermonsRouter);
router.use('/events', eventsRouter);
router.use('/ministries', ministriesRouter);
router.use('/', formsRouter);

export default router;
