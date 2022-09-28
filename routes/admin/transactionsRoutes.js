const express = require('express');
const router = express.Router();
const transactionsController = require('../../controller/admin/transactionsController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/transactions/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,transactionsController.addTransactions);
router.route('/admin/transactions/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,transactionsController.findAllTransactions);
router.route('/admin/transactions/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,transactionsController.getTransactions);
router.route('/admin/transactions/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,transactionsController.getTransactionsCount);
router.route('/admin/transactions/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,transactionsController.getTransactionsByAggregate);
router.route('/admin/transactions/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,transactionsController.updateTransactions);    
router.route('/admin/transactions/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,transactionsController.partialUpdateTransactions);
router.route('/admin/transactions/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,transactionsController.softDeleteTransactions);
router.route('/admin/transactions/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,transactionsController.softDeleteManyTransactions);
router.route('/admin/transactions/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,transactionsController.bulkInsertTransactions);
router.route('/admin/transactions/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,transactionsController.bulkUpdateTransactions);

module.exports = router;
