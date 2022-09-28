/*
 * modelValidation.js
 * purpose     : request validation
 * description : validate each post and put request as per mongoose model
 *
 */
const joi = require('joi');
exports.schemaKeys = joi.object({
  _id: joi.string(),
  name: joi.string(),
  slug: joi.string(),
  code: joi.string(),
  group: joi.string(),
  description: joi.string(),
  sequence: joi.number().integer(),
  image: joi.string(),
  parentId: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  parentCode: joi.boolean(),
  isDefault: joi.boolean().default(false),
  isDeleted: joi.boolean().default(false),
  isActive: joi.boolean()
}).unknown(true);
exports.updateSchemaKeys = joi.object({
  _id: joi.string(),
  name: joi.string(),
  slug: joi.string(),
  code: joi.string(),
  group: joi.string(),
  description: joi.string(),
  sequence: joi.number().integer(),
  image: joi.string(),
  parentId: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  parentCode: joi.boolean(),
  isDefault: joi.boolean().default(false),
  isDeleted: joi.boolean().default(false),
  isActive: joi.boolean()
}).unknown(true);
