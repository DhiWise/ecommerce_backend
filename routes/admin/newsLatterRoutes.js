const express = require('express');
const router = express.Router();
const newsLatterController = require('../../controller/admin/newsLatterController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/newslatter/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,newsLatterController.addNewsLatter);
router.route('/admin/newslatter/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,newsLatterController.findAllNewsLatter);
router.route('/admin/newslatter/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,newsLatterController.getNewsLatter);
router.route('/admin/newslatter/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,newsLatterController.getNewsLatterCount);
router.route('/admin/newslatter/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,newsLatterController.getNewsLatterByAggregate);
router.route('/admin/newslatter/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,newsLatterController.updateNewsLatter);    
router.route('/admin/newslatter/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,newsLatterController.partialUpdateNewsLatter);
router.route('/admin/newslatter/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,newsLatterController.softDeleteNewsLatter);
router.route('/admin/newslatter/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,newsLatterController.softDeleteManyNewsLatter);
router.route('/admin/newslatter/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,newsLatterController.bulkInsertNewsLatter);
router.route('/admin/newslatter/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,newsLatterController.bulkUpdateNewsLatter);

module.exports = router;
