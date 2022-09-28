const express = require('express');
const router = express.Router();
const cartController = require('../../controller/admin/cartController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/cart/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,cartController.addCart);
router.route('/admin/cart/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,cartController.findAllCart);
router.route('/admin/cart/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,cartController.getCart);
router.route('/admin/cart/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,cartController.getCartCount);
router.route('/admin/cart/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,cartController.getCartByAggregate);
router.route('/admin/cart/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,cartController.updateCart);    
router.route('/admin/cart/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,cartController.partialUpdateCart);
router.route('/admin/cart/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,cartController.softDeleteCart);
router.route('/admin/cart/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,cartController.softDeleteManyCart);
router.route('/admin/cart/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,cartController.bulkInsertCart);
router.route('/admin/cart/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,cartController.bulkUpdateCart);

module.exports = router;
