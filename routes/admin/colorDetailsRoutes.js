const express = require('express');
const router = express.Router();
const colorDetailsController = require('../../controller/admin/colorDetailsController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/colordetails/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,colorDetailsController.addColorDetails);
router.route('/admin/colordetails/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,colorDetailsController.findAllColorDetails);
router.route('/admin/colordetails/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,colorDetailsController.getColorDetails);
router.route('/admin/colordetails/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,colorDetailsController.getColorDetailsCount);
router.route('/admin/colordetails/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,colorDetailsController.getColorDetailsByAggregate);
router.route('/admin/colordetails/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,colorDetailsController.updateColorDetails);    
router.route('/admin/colordetails/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,colorDetailsController.partialUpdateColorDetails);
router.route('/admin/colordetails/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,colorDetailsController.softDeleteColorDetails);
router.route('/admin/colordetails/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,colorDetailsController.softDeleteManyColorDetails);
router.route('/admin/colordetails/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,colorDetailsController.bulkInsertColorDetails);
router.route('/admin/colordetails/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,colorDetailsController.bulkUpdateColorDetails);

module.exports = router;
