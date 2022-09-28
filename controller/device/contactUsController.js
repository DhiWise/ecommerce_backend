const ContactUs = require('../../model/contactUs');
const contactUsSchemaKey = require('../../utils/validation/contactUsValidation');
const validation = require('../../utils/validateRequest');
const dbService = require('../../utils/dbService');
const addContactUs = async (req, res) => {
  try {

    let isValid = validation.validateParamsWithJoi(
      req.body,
      contactUsSchemaKey.schemaKeys);
    if (isValid.error) {
      return res.inValidParam(isValid.error);
    } 
    let data = new ContactUs({
      ...req.body
      ,addedBy:req.user.id
    });
    let result = await dbService.createDocument(ContactUs,data);
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

const findAllContactUs = async (req,res) => {
  try {
    let options = {};
    let query = {};
    let result;
    if (req.body.query !== undefined) {
      query = { ...req.body.query };
    }
    if (req.body.isCountOnly){
      result = await dbService.countDocument(ContactUs, query);
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
      result = await dbService.getAllDocuments( ContactUs,query,options);
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

const getContactUs = async (req,res) => {
  try {
    let query = {};
    query._id = req.params.id;

    let result = await dbService.getDocumentByQuery(ContactUs,query);
    if (result){
      return  res.ok(result);
            
    }
    return res.recordNotFound({});
  }
  catch (error){
    return res.failureResponse(error.message);
  }
};

const getContactUsCount = async (req,res) => {
  try {
    let where = {};
    if (req.body.where){
      where = req.body.where;
    }
    let result = await dbService.countDocument(ContactUs,where);
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

const getContactUsByAggregate = async (req,res)=>{
  try {
    let result = await dbService.getDocumentByAggregation(ContactUs,req.body);
    if (result){
      return res.ok(result);
    }
    return res.recordNotFound({});
  } catch (error){
    return res.failureResponse(error.message);
  }
};

const updateContactUs = async (req,res) => {
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
      contactUsSchemaKey.updateSchemaKeys
    );
    if (isValid.error) {
      return  res.inValidParam(isValid.error);
    }
        
    let query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(ContactUs,query,data,{ new:true });
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

const partialUpdateContactUs = async (req,res) => {
  try {
    delete req.body['addedBy'];
    delete req.body['updatedBy'];
    let data = {
      ...req.body,
      id: req.params.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      contactUsSchemaKey.updateSchemaKeys
    );
    if (isValid.error) {
      return res.inValidParam(isValid.error);
    }

    const query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(ContactUs, query, data,{ new:true });
    if (!result) {
      return res.failureResponse('something is wrong');
    }
        
    return res.ok(result);
        
  }
  catch (error){
    return res.failureResponse(error.message);
  }
};

const softDeleteContactUs = async (req,res) => {
  try {
    let query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(ContactUs, query,{
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

const softDeleteManyContactUs = async (req,res) => {
  try {
    let ids = req.body.ids;
    if (ids){
      const query = { _id:{ $in:ids } };
      let data = await dbService.bulkUpdate(ContactUs,query, {
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
const bulkInsertContactUs = async (req,res)=>{
  try {
    let data;   
    if (req.body.data !== undefined && req.body.data.length){
      data = req.body.data;
      for (let i = 0;i < data.length;i++){
        Object.assign(data[i],{ addedBy:req.user.id });
      }

      let result = await dbService.bulkInsert(ContactUs,data);
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

const bulkUpdateContactUs = async (req,res)=>{
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
      let result = await dbService.bulkUpdate(ContactUs,filter,data);
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
  addContactUs,
  findAllContactUs,
  getContactUs,
  getContactUsCount,
  getContactUsByAggregate,
  updateContactUs,
  partialUpdateContactUs,
  softDeleteContactUs,
  softDeleteManyContactUs,
  bulkInsertContactUs,
  bulkUpdateContactUs,
};
