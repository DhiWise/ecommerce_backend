const express = require('express');
const router = express.Router();
const contactUsController = require('../../controller/device/contactUsController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/device/api/v1/contactus/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,contactUsController.addContactUs);
router.route('/device/api/v1/contactus/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,contactUsController.findAllContactUs);
router.route('/device/api/v1/contactus/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,contactUsController.getContactUs);
router.route('/device/api/v1/contactus/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,contactUsController.getContactUsCount);
router.route('/device/api/v1/contactus/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,contactUsController.getContactUsByAggregate);
router.route('/device/api/v1/contactus/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,contactUsController.updateContactUs);    
router.route('/device/api/v1/contactus/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,contactUsController.partialUpdateContactUs);
router.route('/device/api/v1/contactus/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,contactUsController.softDeleteContactUs);
router.route('/device/api/v1/contactus/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,contactUsController.softDeleteManyContactUs);
router.route('/device/api/v1/contactus/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,contactUsController.bulkInsertContactUs);
router.route('/device/api/v1/contactus/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,contactUsController.bulkUpdateContactUs);

module.exports = router;
