/*
 * modelValidation.js
 * purpose     : request validation
 * description : validate each post and put request as per mongoose model
 *
 */
const joi = require('joi');
exports.schemaKeys = joi.object({
  userId: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  token: joi.string(),
  tokenExpiredTime: joi.date(),
  isTokenExpired: joi.boolean().default(false),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);
exports.updateSchemaKeys = joi.object({
  userId: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  token: joi.string(),
  tokenExpiredTime: joi.date(),
  isTokenExpired: joi.boolean().default(false),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);
