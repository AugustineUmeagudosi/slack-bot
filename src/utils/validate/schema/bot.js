import Joi from 'joi';

export const validateRequest = Joi.object().keys({
    // longUrl: Joi.string().required(),
});
