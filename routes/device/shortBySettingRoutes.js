const express = require('express');
const router = express.Router();
const shortBySettingController = require('../../controller/device/shortBySettingController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/device/api/v1/shortbysetting/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,shortBySettingController.addShortBySetting);
router.route('/device/api/v1/shortbysetting/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,shortBySettingController.findAllShortBySetting);
router.route('/device/api/v1/shortbysetting/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,shortBySettingController.getShortBySetting);
router.route('/device/api/v1/shortbysetting/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,shortBySettingController.getShortBySettingCount);
router.route('/device/api/v1/shortbysetting/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,shortBySettingController.getShortBySettingByAggregate);
router.route('/device/api/v1/shortbysetting/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,shortBySettingController.updateShortBySetting);    
router.route('/device/api/v1/shortbysetting/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,shortBySettingController.partialUpdateShortBySetting);
router.route('/device/api/v1/shortbysetting/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,shortBySettingController.softDeleteShortBySetting);
router.route('/device/api/v1/shortbysetting/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,shortBySettingController.softDeleteManyShortBySetting);
router.route('/device/api/v1/shortbysetting/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,shortBySettingController.bulkInsertShortBySetting);
router.route('/device/api/v1/shortbysetting/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,shortBySettingController.bulkUpdateShortBySetting);

module.exports = router;
