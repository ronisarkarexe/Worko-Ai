import Joi from "joi";

const createUser = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "Email is required.",
  }),
  zipCode: Joi.number().required().messages({
    "any.required": "Zip Code is required.",
  }),
}).unknown(true);

export const Validator = {
  createUser,
};
