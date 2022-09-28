var express = require('express');
var router = express.Router();
const fileUploadController = require('../../controller/admin/fileUploadController');
const auth = require('../../middleware/auth');

router.post('/admin/upload',auth(...[ 'fileUploadByAdminInAdminPlatform' ]),fileUploadController.upload);

module.exports = router;