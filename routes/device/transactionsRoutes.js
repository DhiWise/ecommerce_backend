const express = require('express');
const router = express.Router();
const transactionsController = require('../../controller/device/transactionsController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/device/api/v1/transactions/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,transactionsController.addTransactions);
router.route('/device/api/v1/transactions/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,transactionsController.findAllTransactions);
router.route('/device/api/v1/transactions/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,transactionsController.getTransactions);
router.route('/device/api/v1/transactions/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,transactionsController.getTransactionsCount);
router.route('/device/api/v1/transactions/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,transactionsController.getTransactionsByAggregate);
router.route('/device/api/v1/transactions/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,transactionsController.updateTransactions);    
router.route('/device/api/v1/transactions/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,transactionsController.partialUpdateTransactions);
router.route('/device/api/v1/transactions/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,transactionsController.softDeleteTransactions);
router.route('/device/api/v1/transactions/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,transactionsController.softDeleteManyTransactions);
router.route('/device/api/v1/transactions/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,transactionsController.bulkInsertTransactions);
router.route('/device/api/v1/transactions/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,transactionsController.bulkUpdateTransactions);

module.exports = router;
