import { Router } from 'express';
import { validateData } from '../middlewares/validate';
import * as BotValidator from '../utils/validate/schema/bot';
import * as BotController from '../controllers/bot';

const router = Router();

// bot endpoint
router.post(
    '/encode',
    validateData(BotValidator.validateRequest),
    BotController.foo,
);

export default router;