const express = require('express');
const router = express.Router();
const shortBySettingController = require('../../controller/admin/shortBySettingController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/shortbysetting/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,shortBySettingController.addShortBySetting);
router.route('/admin/shortbysetting/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,shortBySettingController.findAllShortBySetting);
router.route('/admin/shortbysetting/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,shortBySettingController.getShortBySetting);
router.route('/admin/shortbysetting/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,shortBySettingController.getShortBySettingCount);
router.route('/admin/shortbysetting/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,shortBySettingController.getShortBySettingByAggregate);
router.route('/admin/shortbysetting/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,shortBySettingController.updateShortBySetting);    
router.route('/admin/shortbysetting/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,shortBySettingController.partialUpdateShortBySetting);
router.route('/admin/shortbysetting/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,shortBySettingController.softDeleteShortBySetting);
router.route('/admin/shortbysetting/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,shortBySettingController.softDeleteManyShortBySetting);
router.route('/admin/shortbysetting/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,shortBySettingController.bulkInsertShortBySetting);
router.route('/admin/shortbysetting/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,shortBySettingController.bulkUpdateShortBySetting);

module.exports = router;
