const Joi = require('joi');

//Register validation
const registerValidation = (data)=>{
const schema = Joi.object({
    userName: Joi.string()
        .required(),
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .alphanum()
        .required()
});
return schema.validate(data);
};

//Login validation
const loginValidation = (data)=>{
    const schema = Joi.object({
        userName: Joi.string()
            .required(),
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .alphanum()
            .required()
    });
    return schema.validate(data);
    };

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;