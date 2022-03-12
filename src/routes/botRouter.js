import { Router } from 'express';
import * as BotController from '../controllers/bot';

const router = Router();

// bot endpoint
router.post('/', BotController.greetings);
router.post('/feeling', BotController.feeling);
router.post('/hobbies', BotController.hobbies);
router.get('/user-responses', BotController.getUserResponses);

export default router;