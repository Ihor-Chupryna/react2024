import Joi from "joi";

const registerValidator = Joi.object({
    username: Joi.string().pattern(/^[a-zA-Z]\w{1,19}$/).required().messages({
        'string.pattern.base': 'First letter, the letters, digits or "_" min max 20'
    }),
    password: Joi.string().pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/).required().messages({
        'string.pattern.base': 'min 1 digit, min 1 uppercase, min 1 lowercase, min 1 special character, 8-20 characters'
    }),
    rePassword: Joi.any().equal(Joi.ref('password')).required().messages({
        'any.only': 'password does not match'
    })
});

export { registerValidator }