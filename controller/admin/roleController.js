const Role = require('../../model/role');
const roleSchemaKey = require('../../utils/validation/roleValidation');
const validation = require('../../utils/validateRequest');
const dbService = require('../../utils/dbService');
const deleteDependentService = require('../../utils/deleteDependent');
const addRole = async (req, res) => {
  try {

    let isValid = validation.validateParamsWithJoi(
      req.body,
      roleSchemaKey.schemaKeys);
    if (isValid.error) {
      return res.inValidParam(isValid.error);
    } 
    let data = new Role({
      ...req.body
      ,addedBy:req.user.id
    });
    let result = await dbService.createDocument(Role,data);
    return  res.ok(result);
  } catch (error) {
    if (error.name === 'ValidationError'){
      return res.validationError(error.message);
    }
    if (error.code && error.code == 11000){
      return res.isDuplicate(error.message);
    }
    return res.failureResponse(error.message); 
  }
};

const bulkInsertRole = async (req,res)=>{
  try {
    let data;   
    if (req.body.data !== undefined && req.body.data.length){
      data = req.body.data;
      for (let i = 0;i < data.length;i++){
        Object.assign(data[i],{ addedBy:req.user.id });
      }

      let result = await dbService.bulkInsert(Role,data);
      return  res.ok(result);
    } else {
      return res.failureResponse('Invalid Data');
    }  
  } catch (error){
    if (error.name === 'ValidationError'){
      return res.validationError(error.message);
    }
    else if (error.code && error.code == 11000){
      return res.isDuplicate(error.message);
    }
    return res.failureResponse(error.message);
  }
};

const findAllRole = async (req,res) => {
  try {
    let options = {};
    let query = {};
    let result;
    if (req.body.query !== undefined) {
      query = { ...req.body.query };
    }
    if (req.body.isCountOnly){
      result = await dbService.countDocument(Role, query);
      if (result) {
        result = { totalRecords: result };
        return res.ok(result);
      } 
      return res.recordNotFound({});
    }
    else {
      if (req.body.options !== undefined) {
        /*
         * if(req.body.options.populate){
         *   delete req.body.options.populate;
         * }
         */
        options = { ...req.body.options };
      }
      result = await dbService.getAllDocuments( Role,query,options);
      if (result && result.data && result.data.length){
        return res.ok(result);   
      }
      return res.recordNotFound({});
    }
  }
  catch (error){
    return res.failureResponse(error.message);
  }
};

const getRole = async (req,res) => {
  try {
    let query = {};
    query._id = req.params.id;

    let result = await dbService.getDocumentByQuery(Role,query);
    if (result){
      return  res.ok(result);
            
    }
    return res.recordNotFound({});
  }
  catch (error){
    return res.failureResponse(error.message);
  }
};

const partialUpdateRole = async (req,res) => {
  try {
    delete req.body['addedBy'];
    delete req.body['updatedBy'];
    let data = {
      ...req.body,
      id: req.params.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      roleSchemaKey.updateSchemaKeys
    );
    if (isValid.error) {
      return res.inValidParam(isValid.error);
    }

    const query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(Role, query, data,{ new:true });
    if (!result) {
      return res.failureResponse('something is wrong');
    }
        
    return res.ok(result);
        
  }
  catch (error){
    return res.failureResponse(error.message);
  }
};

const softDeleteRole = async (req,res) => {
  try {
    let query = { _id:req.params.id };
    let result = await deleteDependentService.softDeleteRole(query,req.user);
    if (!result){
      return res.failureResponse('something went wrong');
    }
    return  res.ok(result);
  } catch (error){
    return res.failureResponse(error.message); 
  }
};

const updateRole = async (req,res) => {
  try {
    delete req.body['addedBy'];
    delete req.body['updatedBy'];
    let data = {
      ...req.body,
      id:req.params.id
      ,updatedBy:req.user.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      roleSchemaKey.updateSchemaKeys
    );
    if (isValid.error) {
      return  res.inValidParam(isValid.error);
    }
        
    let query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(Role,query,data,{ new:true });
    if (!result){
      return res.failureResponse('something is wrong');
    }
        
    return  res.ok(result);
  }
  catch (error){
    if (error.name === 'ValidationError'){
      return res.validationError(error.message);
    }
    else if (error.code && error.code == 11000){
      return res.isDuplicate(error.message);
    }
    return res.failureResponse(error.message);
  }
};

const getRoleByAggregate = async (req,res)=>{
  try {
    let result = await dbService.getDocumentByAggregation(Role,req.body);
    if (result){
      return res.ok(result);
    }
    return res.recordNotFound({});
  } catch (error){
    return res.failureResponse(error.message);
  }
};

const getRoleCount = async (req,res) => {
  try {
    let where = {};
    if (req.body.where){
      where = req.body.where;
    }
    let result = await dbService.countDocument(Role,where);
    if (result){
      result = { totalRecords:result };
      return res.ok(result);
    }
    return res.recordNotFound({});
  }
  catch (error){
    return res.failureResponse(error.message);
  }
};

const upsert = async (req,res) => {
  try {
    delete req.body['addedBy'];
    delete req.body['updatedBy'];
    let params = req.body;
    let isValid = validation.validateParamsWithJoi(
      params,
      roleSchemaKey.schemaKeys
    );
    if (isValid.error) {
      return res.inValidParam(isValid.error);
    }

    if (params.id) {
      let where = params.id;
      ['id','createdAt','updatedAt'].forEach(e => delete params[e]);
      params.updatedBy = req.user.id;
      let result = await dbService.updateDocument(Role, where, params);
      if (!result){
        res.failureResponse('something is wrong');
      }

      return res.ok(result);
    }
    else {
      params.addedBy = req.user.id;
      let data = new Role({ ...params });
      let result = await dbService.createDocument(Role, data);
      if (!result){
        return res.failureResponse('something is wrong');
      }
      return  res.ok(result);    
    }
  }
  catch (error){
    if (error.name === 'ValidationError'){
      return res.validationError(error.message);
    }
    else if (error.code && error.code == 11000){
      return res.isDuplicate(error.message);
    }
    return res.failureResponse(error.message); 
  }
};

const bulkUpdateRole = async (req,res)=>{
  try {
    let filter = {};
    let data;
    if (req.body.filter !== undefined){
      filter = req.body.filter;
    }
    if (req.body.data !== undefined){
      data = req.body.data;
      delete data['addedBy'];
      delete data['updatedBy'];
      data.updatedBy = req.user.id;
      let result = await dbService.bulkUpdate(Role,filter,data);
      if (!result){
        return res.failureResponse('something is wrong.');
      }

      return  res.ok(result);
    }
    else {
      return res.failureResponse('Invalid Data');
    }
  }
  catch (error){
    return res.failureResponse(error.message); 
  }
};

module.exports = {
  addRole,
  bulkInsertRole,
  findAllRole,
  getRole,
  partialUpdateRole,
  softDeleteRole,
  updateRole,
  getRoleByAggregate,
  getRoleCount,
  upsert,
  bulkUpdateRole,
};
