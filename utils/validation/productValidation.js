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
  name: joi.string(),
  actualPrice: joi.number().integer(),
  discountRate: joi.number().min(0).max(100),
  price: joi.number().integer(),
  images: joi.array().items(),
  specification: joi.string(),
  brand: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  category: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  coverImage: joi.string(),
  isDeleted: joi.boolean()
}).unknown(true);
exports.updateSchemaKeys = joi.object({
  _id: joi.string(),
  isActive: joi.boolean(),
  name: joi.string(),
  actualPrice: joi.number().integer(),
  discountRate: joi.number().min(0).max(100),
  price: joi.number().integer(),
  images: joi.array().items(),
  specification: joi.string(),
  brand: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  category: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  coverImage: joi.string(),
  isDeleted: joi.boolean()
}).unknown(true);
