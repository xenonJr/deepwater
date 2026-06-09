import { Router } from 'express';
import { submitPrayerRequest, submitContact, submitPlanVisit } from '../controllers/forms.controller';

const router = Router();

router.post('/prayer-request', submitPrayerRequest);
router.post('/contact', submitContact);
router.post('/plan-visit', submitPlanVisit);

export default router;
