const express = require('express');
const router = express.Router();
const contactUsController = require('../../controller/admin/contactUsController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/contactus/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,contactUsController.addContactUs);
router.route('/admin/contactus/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,contactUsController.findAllContactUs);
router.route('/admin/contactus/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,contactUsController.getContactUs);
router.route('/admin/contactus/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,contactUsController.getContactUsCount);
router.route('/admin/contactus/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,contactUsController.getContactUsByAggregate);
router.route('/admin/contactus/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,contactUsController.updateContactUs);    
router.route('/admin/contactus/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,contactUsController.partialUpdateContactUs);
router.route('/admin/contactus/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,contactUsController.softDeleteContactUs);
router.route('/admin/contactus/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,contactUsController.softDeleteManyContactUs);
router.route('/admin/contactus/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,contactUsController.bulkInsertContactUs);
router.route('/admin/contactus/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,contactUsController.bulkUpdateContactUs);

module.exports = router;
