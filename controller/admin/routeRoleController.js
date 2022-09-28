const RouteRole = require('../../model/routeRole');
const routeRoleSchemaKey = require('../../utils/validation/routeRoleValidation');
const validation = require('../../utils/validateRequest');
const dbService = require('../../utils/dbService');
const addRouteRole = async (req, res) => {
  try {

    let isValid = validation.validateParamsWithJoi(
      req.body,
      routeRoleSchemaKey.schemaKeys);
    if (isValid.error) {
      return res.inValidParam(isValid.error);
    } 
    let data = new RouteRole({
      ...req.body
      ,addedBy:req.user.id
    });
    let result = await dbService.createDocument(RouteRole,data);
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

const bulkInsertRouteRole = async (req,res)=>{
  try {
    let data;   
    if (req.body.data !== undefined && req.body.data.length){
      data = req.body.data;
      for (let i = 0;i < data.length;i++){
        Object.assign(data[i],{ addedBy:req.user.id });
      }

      let result = await dbService.bulkInsert(RouteRole,data);
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

const findAllRouteRole = async (req,res) => {
  try {
    let options = {};
    let query = {};
    let result;
    if (req.body.query !== undefined) {
      query = { ...req.body.query };
    }
    if (req.body.isCountOnly){
      result = await dbService.countDocument(RouteRole, query);
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
      result = await dbService.getAllDocuments( RouteRole,query,options);
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

const getRouteRole = async (req,res) => {
  try {
    let query = {};
    query._id = req.params.id;

    let result = await dbService.getDocumentByQuery(RouteRole,query);
    if (result){
      return  res.ok(result);
            
    }
    return res.recordNotFound({});
  }
  catch (error){
    return res.failureResponse(error.message);
  }
};

const partialUpdateRouteRole = async (req,res) => {
  try {
    delete req.body['addedBy'];
    delete req.body['updatedBy'];
    let data = {
      ...req.body,
      id: req.params.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      routeRoleSchemaKey.updateSchemaKeys
    );
    if (isValid.error) {
      return res.inValidParam(isValid.error);
    }

    const query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(RouteRole, query, data,{ new:true });
    if (!result) {
      return res.failureResponse('something is wrong');
    }
        
    return res.ok(result);
        
  }
  catch (error){
    return res.failureResponse(error.message);
  }
};

const updateRouteRole = async (req,res) => {
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
      routeRoleSchemaKey.updateSchemaKeys
    );
    if (isValid.error) {
      return  res.inValidParam(isValid.error);
    }
        
    let query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(RouteRole,query,data,{ new:true });
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

const softDeleteRouteRole = async (req,res) => {
  try {
    let query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(RouteRole, query,{
      isDeleted: true,
      updatedBy:req.user.id
    },{ new:true });
    if (!result){
      return res.recordNotFound({});
    }
    return  res.ok(result);
  } catch (error){
    return res.failureResponse(error.message); 
  }
};

const getRouteRoleByAggregate = async (req,res)=>{
  try {
    let result = await dbService.getDocumentByAggregation(RouteRole,req.body);
    if (result){
      return res.ok(result);
    }
    return res.recordNotFound({});
  } catch (error){
    return res.failureResponse(error.message);
  }
};

const getRouteRoleCount = async (req,res) => {
  try {
    let where = {};
    if (req.body.where){
      where = req.body.where;
    }
    let result = await dbService.countDocument(RouteRole,where);
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
      routeRoleSchemaKey.schemaKeys
    );
    if (isValid.error) {
      return res.inValidParam(isValid.error);
    }

    if (params.id) {
      let where = params.id;
      ['id','createdAt','updatedAt'].forEach(e => delete params[e]);
      params.updatedBy = req.user.id;
      let result = await dbService.updateDocument(RouteRole, where, params);
      if (!result){
        res.failureResponse('something is wrong');
      }

      return res.ok(result);
    }
    else {
      params.addedBy = req.user.id;
      let data = new RouteRole({ ...params });
      let result = await dbService.createDocument(RouteRole, data);
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

const bulkUpdateRouteRole = async (req,res)=>{
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
      let result = await dbService.bulkUpdate(RouteRole,filter,data);
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
  addRouteRole,
  bulkInsertRouteRole,
  findAllRouteRole,
  getRouteRole,
  partialUpdateRouteRole,
  updateRouteRole,
  softDeleteRouteRole,
  getRouteRoleByAggregate,
  getRouteRoleCount,
  upsert,
  bulkUpdateRouteRole,
};
