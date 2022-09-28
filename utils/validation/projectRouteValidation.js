/*
 * modelValidation.js
 * purpose     : request validation
 * description : validate each post and put request as per mongoose model
 *
 */
const joi = require('joi');
exports.schemaKeys = joi.object({
  route_name: joi.string().required(),
  method: joi.string().required(),
  uri: joi.string().required(),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);
exports.updateSchemaKeys = joi.object({
  route_name: joi.string().when({
    is:joi.exist(),
    then:joi.required(),
    otherwise:joi.optional()
  }),
  method: joi.string().when({
    is:joi.exist(),
    then:joi.required(),
    otherwise:joi.optional()
  }),
  uri: joi.string().when({
    is:joi.exist(),
    then:joi.required(),
    otherwise:joi.optional()
  }),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);
