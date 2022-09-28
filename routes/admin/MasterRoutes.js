const express = require('express');
const router = express.Router();
const MasterController = require('../../controller/admin/MasterController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/master/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,MasterController.addMaster);
router.route('/admin/master/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,MasterController.findAllMaster);
router.route('/admin/master/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,MasterController.getMaster);
router.route('/admin/master/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,MasterController.getMasterCount);
router.route('/admin/master/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,MasterController.getMasterByAggregate);
router.route('/admin/master/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,MasterController.updateMaster);    
router.route('/admin/master/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,MasterController.partialUpdateMaster);
router.route('/admin/master/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,MasterController.softDeleteMaster);
router.route('/admin/master/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,MasterController.softDeleteManyMaster);
router.route('/admin/master/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,MasterController.bulkInsertMaster);
router.route('/admin/master/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,MasterController.bulkUpdateMaster);

module.exports = router;
