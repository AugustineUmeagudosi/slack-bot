import { Router } from 'express';
import * as BotController from '../controllers/bot';

const router = Router();

// bot endpoint
router.post('/', BotController.greetings);

// bot endpoint
router.post('/messages', BotController.messages);

export default router;