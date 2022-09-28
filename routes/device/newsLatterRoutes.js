const express = require('express');
const router = express.Router();
const newsLatterController = require('../../controller/device/newsLatterController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/device/api/v1/newslatter/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,newsLatterController.addNewsLatter);
router.route('/device/api/v1/newslatter/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,newsLatterController.findAllNewsLatter);
router.route('/device/api/v1/newslatter/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,newsLatterController.getNewsLatter);
router.route('/device/api/v1/newslatter/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,newsLatterController.getNewsLatterCount);
router.route('/device/api/v1/newslatter/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,newsLatterController.getNewsLatterByAggregate);
router.route('/device/api/v1/newslatter/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,newsLatterController.updateNewsLatter);    
router.route('/device/api/v1/newslatter/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,newsLatterController.partialUpdateNewsLatter);
router.route('/device/api/v1/newslatter/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,newsLatterController.softDeleteNewsLatter);
router.route('/device/api/v1/newslatter/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,newsLatterController.softDeleteManyNewsLatter);
router.route('/device/api/v1/newslatter/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,newsLatterController.bulkInsertNewsLatter);
router.route('/device/api/v1/newslatter/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,newsLatterController.bulkUpdateNewsLatter);

module.exports = router;
