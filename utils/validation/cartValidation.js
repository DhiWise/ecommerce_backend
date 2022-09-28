/*
 * modelValidation.js
 * purpose     : request validation
 * description : validate each post and put request as per mongoose model
 *
 */
const joi = require('joi');
exports.schemaKeys = joi.object({
  _id: joi.string(),
  isActive: joi.boolean(),
  user: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  product: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  quantity: joi.number().integer(),
  cartId: joi.string(),
  isDeleted: joi.boolean()
}).unknown(true);
exports.updateSchemaKeys = joi.object({
  _id: joi.string(),
  isActive: joi.boolean(),
  user: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  product: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  quantity: joi.number().integer(),
  cartId: joi.string(),
  isDeleted: joi.boolean()
}).unknown(true);
