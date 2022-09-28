const express = require('express');
const router = express.Router();
const MasterController = require('../../controller/device/MasterController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/device/api/v1/master/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,MasterController.addMaster);
router.route('/device/api/v1/master/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,MasterController.findAllMaster);
router.route('/device/api/v1/master/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,MasterController.getMaster);
router.route('/device/api/v1/master/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,MasterController.getMasterCount);
router.route('/device/api/v1/master/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,MasterController.getMasterByAggregate);
router.route('/device/api/v1/master/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,MasterController.updateMaster);    
router.route('/device/api/v1/master/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,MasterController.partialUpdateMaster);
router.route('/device/api/v1/master/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,MasterController.softDeleteMaster);
router.route('/device/api/v1/master/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,MasterController.softDeleteManyMaster);
router.route('/device/api/v1/master/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,MasterController.bulkInsertMaster);
router.route('/device/api/v1/master/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,MasterController.bulkUpdateMaster);

module.exports = router;
