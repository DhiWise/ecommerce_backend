/*
 * modelValidation.js
 * purpose     : request validation
 * description : validate each post and put request as per mongoose model
 *
 */
const joi = require('joi');
const contactUsDefault = require('../../constants/contactUs');    
exports.schemaKeys = joi.object({
  _id: joi.string(),
  isActive: joi.boolean(),
  user: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  question: joi.string(),
  answer: joi.string(),
  status: joi.string().default(contactUsDefault.status.PENDING),
  isDeleted: joi.boolean()
}).unknown(true);
exports.updateSchemaKeys = joi.object({
  _id: joi.string(),
  isActive: joi.boolean(),
  user: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  question: joi.string(),
  answer: joi.string(),
  status: joi.string().default(contactUsDefault.status.PENDING),
  isDeleted: joi.boolean()
}).unknown(true);
