/*
 * modelValidation.js
 * purpose     : request validation
 * description : validate each post and put request as per mongoose model
 *
 */
const joi = require('joi');
const { USER_ROLE } = require('../../constants/authConstant');
const { convertObjectToEnum } = require('../common');   
exports.schemaKeys = joi.object({
  password: joi.string(),
  email: joi.string(),
  fullName: joi.string(),
  _id: joi.string(),
  isActive: joi.boolean(),
  address: joi.array().items(joi.object()),
  role: joi.number().integer().valid(...convertObjectToEnum(USER_ROLE)),
  resetPasswordLink: joi.object({
    code:joi.string(),
    expireTime:joi.date()
  }),
  isDeleted: joi.boolean()
}).unknown(true);
exports.updateSchemaKeys = joi.object({
  password: joi.string(),
  email: joi.string(),
  fullName: joi.string(),
  _id: joi.string(),
  isActive: joi.boolean(),
  address: joi.array().items(joi.object()),
  role: joi.number().integer().valid(...convertObjectToEnum(USER_ROLE)),
  resetPasswordLink: joi.object({
    code:joi.string(),
    expireTime:joi.date()
  }),
  isDeleted: joi.boolean()
}).unknown(true);
