import { Router } from 'express';
import { validateData } from '../middlewares/validate';
import { botRequests } from '../utils/validate/schema/bot';
import { feeling, hobbies, getUserResponses } from '../controllers/bot';

const router = Router();

// bot endpoint
router.post('/feeling', validateData(botRequests), feeling);
router.post('/hobbies', validateData(botRequests), hobbies);
router.get('/user-responses', getUserResponses);

export default router;