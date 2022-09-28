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
  orderId: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  paymentStatus: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  paymentType: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  isDeleted: joi.boolean()
}).unknown(true);
exports.updateSchemaKeys = joi.object({
  _id: joi.string(),
  isActive: joi.boolean(),
  orderId: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  paymentStatus: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  paymentType: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  isDeleted: joi.boolean()
}).unknown(true);
