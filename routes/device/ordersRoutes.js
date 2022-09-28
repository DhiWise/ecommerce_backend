const express = require('express');
const router = express.Router();
const ordersController = require('../../controller/device/ordersController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/device/api/v1/orders/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,ordersController.addOrders);
router.route('/device/api/v1/orders/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,ordersController.findAllOrders);
router.route('/device/api/v1/orders/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,ordersController.getOrders);
router.route('/device/api/v1/orders/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,ordersController.getOrdersCount);
router.route('/device/api/v1/orders/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,ordersController.getOrdersByAggregate);
router.route('/device/api/v1/orders/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,ordersController.updateOrders);    
router.route('/device/api/v1/orders/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,ordersController.partialUpdateOrders);
router.route('/device/api/v1/orders/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,ordersController.softDeleteOrders);
router.route('/device/api/v1/orders/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,ordersController.softDeleteManyOrders);
router.route('/device/api/v1/orders/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,ordersController.bulkInsertOrders);
router.route('/device/api/v1/orders/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,ordersController.bulkUpdateOrders);

module.exports = router;
