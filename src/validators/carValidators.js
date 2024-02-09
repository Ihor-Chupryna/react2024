import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'brand: only letters from 1 to 20 symbols'
    }),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1999).max(new Date().getFullYear()).required()
});

export { carValidator }