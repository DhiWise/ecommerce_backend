const express = require('express');
const router = express.Router();
const sellerController = require('../../controller/device/sellerController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/device/api/v1/seller/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,sellerController.addSeller);
router.route('/device/api/v1/seller/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,sellerController.findAllSeller);
router.route('/device/api/v1/seller/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,sellerController.getSeller);
router.route('/device/api/v1/seller/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,sellerController.getSellerCount);
router.route('/device/api/v1/seller/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,sellerController.getSellerByAggregate);
router.route('/device/api/v1/seller/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,sellerController.updateSeller);    
router.route('/device/api/v1/seller/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,sellerController.partialUpdateSeller);
router.route('/device/api/v1/seller/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,sellerController.softDeleteSeller);
router.route('/device/api/v1/seller/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,sellerController.softDeleteManySeller);
router.route('/device/api/v1/seller/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,sellerController.bulkInsertSeller);
router.route('/device/api/v1/seller/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,sellerController.bulkUpdateSeller);

module.exports = router;
