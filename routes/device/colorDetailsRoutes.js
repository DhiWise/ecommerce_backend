const express = require('express');
const router = express.Router();
const colorDetailsController = require('../../controller/device/colorDetailsController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/device/api/v1/colordetails/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,colorDetailsController.addColorDetails);
router.route('/device/api/v1/colordetails/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,colorDetailsController.findAllColorDetails);
router.route('/device/api/v1/colordetails/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,colorDetailsController.getColorDetails);
router.route('/device/api/v1/colordetails/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,colorDetailsController.getColorDetailsCount);
router.route('/device/api/v1/colordetails/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,colorDetailsController.getColorDetailsByAggregate);
router.route('/device/api/v1/colordetails/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,colorDetailsController.updateColorDetails);    
router.route('/device/api/v1/colordetails/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,colorDetailsController.partialUpdateColorDetails);
router.route('/device/api/v1/colordetails/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,colorDetailsController.softDeleteColorDetails);
router.route('/device/api/v1/colordetails/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,colorDetailsController.softDeleteManyColorDetails);
router.route('/device/api/v1/colordetails/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,colorDetailsController.bulkInsertColorDetails);
router.route('/device/api/v1/colordetails/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,colorDetailsController.bulkUpdateColorDetails);

module.exports = router;
