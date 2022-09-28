const express = require('express');
const router = express.Router();
const sellerController = require('../../controller/admin/sellerController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/seller/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,sellerController.addSeller);
router.route('/admin/seller/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,sellerController.findAllSeller);
router.route('/admin/seller/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,sellerController.getSeller);
router.route('/admin/seller/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,sellerController.getSellerCount);
router.route('/admin/seller/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,sellerController.getSellerByAggregate);
router.route('/admin/seller/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,sellerController.updateSeller);    
router.route('/admin/seller/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,sellerController.partialUpdateSeller);
router.route('/admin/seller/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,sellerController.softDeleteSeller);
router.route('/admin/seller/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,sellerController.softDeleteManySeller);
router.route('/admin/seller/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,sellerController.bulkInsertSeller);
router.route('/admin/seller/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,sellerController.bulkUpdateSeller);

module.exports = router;
