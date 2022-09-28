const express = require('express');
const router = express.Router();
const cartController = require('../../controller/device/cartController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/device/api/v1/cart/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,cartController.addCart);
router.route('/device/api/v1/cart/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,cartController.findAllCart);
router.route('/device/api/v1/cart/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,cartController.getCart);
router.route('/device/api/v1/cart/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,cartController.getCartCount);
router.route('/device/api/v1/cart/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,cartController.getCartByAggregate);
router.route('/device/api/v1/cart/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,cartController.updateCart);    
router.route('/device/api/v1/cart/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,cartController.partialUpdateCart);
router.route('/device/api/v1/cart/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,cartController.softDeleteCart);
router.route('/device/api/v1/cart/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,cartController.softDeleteManyCart);
router.route('/device/api/v1/cart/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,cartController.bulkInsertCart);
router.route('/device/api/v1/cart/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,cartController.bulkUpdateCart);

module.exports = router;
