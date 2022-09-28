const express = require('express');
const router = express.Router();
const productController = require('../../controller/admin/productController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/product/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,productController.addProduct);
router.route('/admin/product/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,productController.findAllProduct);
router.route('/admin/product/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,productController.getProduct);
router.route('/admin/product/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,productController.getProductCount);
router.route('/admin/product/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,productController.getProductByAggregate);
router.route('/admin/product/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,productController.updateProduct);    
router.route('/admin/product/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,productController.partialUpdateProduct);
router.route('/admin/product/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,productController.softDeleteProduct);
router.route('/admin/product/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,productController.softDeleteManyProduct);
router.route('/admin/product/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,productController.bulkInsertProduct);
router.route('/admin/product/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,productController.bulkUpdateProduct);

module.exports = router;
