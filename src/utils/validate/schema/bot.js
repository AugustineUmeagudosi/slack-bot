import Joi from 'joi';

export const botRequests = Joi.object().keys({
    user: Joi.object().required(),
    actions: Joi.array().required(),
});
