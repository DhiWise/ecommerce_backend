const ColorDetails = require('../../model/colorDetails');
const colorDetailsSchemaKey = require('../../utils/validation/colorDetailsValidation');
const validation = require('../../utils/validateRequest');
const dbService = require('../../utils/dbService');
const addColorDetails = async (req, res) => {
  try {

    let isValid = validation.validateParamsWithJoi(
      req.body,
      colorDetailsSchemaKey.schemaKeys);
    if (isValid.error) {
      return res.inValidParam(isValid.error);
    } 
    let data = new ColorDetails({
      ...req.body
      ,addedBy:req.user.id
    });
    let result = await dbService.createDocument(ColorDetails,data);
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

const findAllColorDetails = async (req,res) => {
  try {
    let options = {};
    let query = {};
    let result;
    if (req.body.query !== undefined) {
      query = { ...req.body.query };
    }
    if (req.body.isCountOnly){
      result = await dbService.countDocument(ColorDetails, query);
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
      result = await dbService.getAllDocuments( ColorDetails,query,options);
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

const getColorDetails = async (req,res) => {
  try {
    let query = {};
    query._id = req.params.id;

    let result = await dbService.getDocumentByQuery(ColorDetails,query);
    if (result){
      return  res.ok(result);
            
    }
    return res.recordNotFound({});
  }
  catch (error){
    return res.failureResponse(error.message);
  }
};

const getColorDetailsCount = async (req,res) => {
  try {
    let where = {};
    if (req.body.where){
      where = req.body.where;
    }
    let result = await dbService.countDocument(ColorDetails,where);
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

const getColorDetailsByAggregate = async (req,res)=>{
  try {
    let result = await dbService.getDocumentByAggregation(ColorDetails,req.body);
    if (result){
      return res.ok(result);
    }
    return res.recordNotFound({});
  } catch (error){
    return res.failureResponse(error.message);
  }
};

const updateColorDetails = async (req,res) => {
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
      colorDetailsSchemaKey.updateSchemaKeys
    );
    if (isValid.error) {
      return  res.inValidParam(isValid.error);
    }
        
    let query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(ColorDetails,query,data,{ new:true });
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

const partialUpdateColorDetails = async (req,res) => {
  try {
    delete req.body['addedBy'];
    delete req.body['updatedBy'];
    let data = {
      ...req.body,
      id: req.params.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      colorDetailsSchemaKey.updateSchemaKeys
    );
    if (isValid.error) {
      return res.inValidParam(isValid.error);
    }

    const query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(ColorDetails, query, data,{ new:true });
    if (!result) {
      return res.failureResponse('something is wrong');
    }
        
    return res.ok(result);
        
  }
  catch (error){
    return res.failureResponse(error.message);
  }
};

const softDeleteColorDetails = async (req,res) => {
  try {
    let query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(ColorDetails, query,{
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

const softDeleteManyColorDetails = async (req,res) => {
  try {
    let ids = req.body.ids;
    if (ids){
      const query = { _id:{ $in:ids } };
      let data = await dbService.bulkUpdate(ColorDetails,query, {
        isDeleted: true,
        updatedBy:req.user.id
      });
      if (!data) {
        return res.recordNotFound({});
      }
      return  res.ok(data);
    }
    return res.badRequest({});
  } catch (error){
    return res.failureResponse(error.message); 
  }
};
const bulkInsertColorDetails = async (req,res)=>{
  try {
    let data;   
    if (req.body.data !== undefined && req.body.data.length){
      data = req.body.data;
      for (let i = 0;i < data.length;i++){
        Object.assign(data[i],{ addedBy:req.user.id });
      }

      let result = await dbService.bulkInsert(ColorDetails,data);
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

const bulkUpdateColorDetails = async (req,res)=>{
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
      let result = await dbService.bulkUpdate(ColorDetails,filter,data);
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
  addColorDetails,
  findAllColorDetails,
  getColorDetails,
  getColorDetailsCount,
  getColorDetailsByAggregate,
  updateColorDetails,
  partialUpdateColorDetails,
  softDeleteColorDetails,
  softDeleteManyColorDetails,
  bulkInsertColorDetails,
  bulkUpdateColorDetails,
};
