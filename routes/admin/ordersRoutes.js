const express = require('express');
const router = express.Router();
const ordersController = require('../../controller/admin/ordersController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/orders/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,ordersController.addOrders);
router.route('/admin/orders/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,ordersController.findAllOrders);
router.route('/admin/orders/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,ordersController.getOrders);
router.route('/admin/orders/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,ordersController.getOrdersCount);
router.route('/admin/orders/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,ordersController.getOrdersByAggregate);
router.route('/admin/orders/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,ordersController.updateOrders);    
router.route('/admin/orders/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,ordersController.partialUpdateOrders);
router.route('/admin/orders/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,ordersController.softDeleteOrders);
router.route('/admin/orders/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,ordersController.softDeleteManyOrders);
router.route('/admin/orders/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,ordersController.bulkInsertOrders);
router.route('/admin/orders/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,ordersController.bulkUpdateOrders);

module.exports = router;
