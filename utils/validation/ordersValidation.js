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
  cartId: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  totalAmount: joi.number().integer(),
  deliveryAddress: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  orderId: joi.string(),
  orderStatus: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  isDeleted: joi.boolean()
}).unknown(true);
exports.updateSchemaKeys = joi.object({
  _id: joi.string(),
  isActive: joi.boolean(),
  cartId: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  totalAmount: joi.number().integer(),
  deliveryAddress: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  orderId: joi.string(),
  orderStatus: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  isDeleted: joi.boolean()
}).unknown(true);
