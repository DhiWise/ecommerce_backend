const User = require('../../model/user');
const userSchemaKey = require('../../utils/validation/userValidation');
const validation = require('../../utils/validateRequest');
const dbService = require('../../utils/dbService');
const auth = require('../../services/auth');
const deleteDependentService = require('../../utils/deleteDependent');
const addUser = async (req, res) => {
  try {

    let isValid = validation.validateParamsWithJoi(
      req.body,
      userSchemaKey.schemaKeys);
    if (isValid.error) {
      return res.inValidParam(isValid.error);
    } 
    let data = new User({
      ...req.body
      ,addedBy:req.user.id
    });
    let result = await dbService.createDocument(User,data);
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

const findAllUser = async (req,res) => {
  try {
    let options = {};
    let query = {};
    let result;
    if (req.body.query !== undefined) {
      query = { ...req.body.query };
    }
    if (req.user){
      query = {
        ...query,
        ...{ '_id': { $ne: req.user.id } } 
      };
      if (req.body.query && req.body.query._id) {
        Object.assign(query._id, { $in: [req.body.query._id] });
      }
    } else {
      return res.badRequest({});
    }
    if (req.body.isCountOnly){
      result = await dbService.countDocument(User, query);
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
      if (!options.populate) options.populate = [];
      options.populate = options.populate.concat([ { path: 'cartItem' }, { path: 'orders' }, { path: 'reviews' } ]);
      result = await dbService.getAllDocuments( User,query,options);
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

const getUser = async (req,res) => {
  try {
    let query = {};
    query._id = req.params.id;

    let result = await dbService.getDocumentByQuery(User,query);
    if (result){
      result = await result.populate([{ 'path':'cartItem' },{ 'path':'orders' },{ 'path':'reviews' }]).execPopulate();
      return  res.ok(result);
            
    }
    return res.recordNotFound({});
  }
  catch (error){
    return res.failureResponse(error.message);
  }
};

const getUserCount = async (req,res) => {
  try {
    let where = {};
    if (req.body.where){
      where = req.body.where;
    }
    let result = await dbService.countDocument(User,where);
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

const getUserByAggregate = async (req,res)=>{
  try {
    let result = await dbService.getDocumentByAggregation(User,req.body);
    if (result){
      return res.ok(result);
    }
    return res.recordNotFound({});
  } catch (error){
    return res.failureResponse(error.message);
  }
};

const updateUser = async (req,res) => {
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
      userSchemaKey.updateSchemaKeys
    );
    if (isValid.error) {
      return  res.inValidParam(isValid.error);
    }
        
    let query = {};
    if (req.user){
      query = {
        '_id': {
          '$eq': req.params.id,
          '$ne': req.user.id
        }
      };
    } else {
      return res.badRequest({});
    }
    let result = await dbService.findOneAndUpdateDocument(User,query,data,{ new:true });
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

const partialUpdateUser = async (req,res) => {
  try {
    delete req.body['addedBy'];
    delete req.body['updatedBy'];
    let data = {
      ...req.body,
      id: req.params.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      userSchemaKey.updateSchemaKeys
    );
    if (isValid.error) {
      return res.inValidParam(isValid.error);
    }

    let query = {};
    if (req.user){
      query = {
        '_id': {
          '$eq': req.params.id,
          '$ne': req.user.id
        }
      };
    } else {
      return res.badRequest({});
    } 
    let result = await dbService.findOneAndUpdateDocument(User, query, data,{ new:true });
    if (!result) {
      return res.failureResponse('something is wrong');
    }
        
    return res.ok(result);
        
  }
  catch (error){
    return res.failureResponse(error.message);
  }
};

const softDeleteUser = async (req,res) => {
  try {
    let query = {};
    if (req.user){
      query = {
        '_id': {
          '$eq': req.params.id,
          '$ne': req.user.id
        }
      };
    } 
    let result = await deleteDependentService.softDeleteUser(query,req.user);
    if (!result){
      return res.failureResponse('something went wrong');
    }
    return  res.ok(result);
  } catch (error){
    return res.failureResponse(error.message); 
  }
};

const softDeleteManyUser = async (req,res) => {
  try {
    let ids = req.body.ids;
    if (ids){
      let query = {};
      if (req.user){
        query = {
          '_id': {
            '$in': ids,
            '$ne': req.user.id
          }
        };
      } 
      let result = await deleteDependentService.softDeleteUser(query,req.user);
      if (!result) {
        return res.recordNotFound({});
      }
      return  res.ok(result);
    }
    return res.badRequest({});
  } catch (error){
    return res.failureResponse(error.message); 
  }
};
const bulkInsertUser = async (req,res)=>{
  try {
    let data;   
    if (req.body.data !== undefined && req.body.data.length){
      data = req.body.data;
      for (let i = 0;i < data.length;i++){
        Object.assign(data[i],{ addedBy:req.user.id });
      }

      let result = await dbService.bulkInsert(User,data);
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

const bulkUpdateUser = async (req,res)=>{
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
      let result = await dbService.bulkUpdate(User,filter,data);
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

const changePassword = async (req, res) => {
  try {
    let params = req.body;
    if (!params.newPassword || !req.user.id || !params.oldPassword) {
      return res.inValidParam('Please Provide userId and new Password and Old password');
    }
    let result = await auth.changePassword({
      ...params,
      userId:req.user.id
    });
    if (result.flag){
      return res.invalidRequest(result.data);
    }
    return res.requestValidated(result.data);
  } catch (error) {
    return res.failureResponse(error);
  }
};

const updateProfile = async (req, res) => {
  try {
    let data = {
      ...req.body,
      id:req.user.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      userSchemaKey.updateSchemaKeys
    );
    if (isValid.error) {
      return  res.inValidParam(isValid.error);
    }
    if (data.password) delete data.password;
    if (data.createdAt) delete data.createdAt;
    if (data.updatedAt) delete data.updatedAt;
    if (data.id) delete data.id;
    let result = await dbService.findOneAndUpdateDocument(User,{ _id:req.user.id },data,{ new:true });
    if (!result){
      return res.failureResponse('something is wrong');
    }            
    return  res.ok(result);
  }
  catch (error){
    if (error.name === 'ValidationError'){
      return res.isDuplicate(error.message);
    }
    if (error.code && error.code == 11000){
      return res.isDuplicate(error.message);
    }
    return res.failureResponse(error.message);
  }
};

module.exports = {
  addUser,
  findAllUser,
  getUser,
  getUserCount,
  getUserByAggregate,
  updateUser,
  partialUpdateUser,
  softDeleteUser,
  softDeleteManyUser,
  bulkInsertUser,
  bulkUpdateUser,
  changePassword,
  updateProfile,
};
