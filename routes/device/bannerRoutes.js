const express = require('express');
const router = express.Router();
const bannerController = require('../../controller/device/bannerController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/device/api/v1/banner/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,bannerController.addBanner);
router.route('/device/api/v1/banner/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,bannerController.findAllBanner);
router.route('/device/api/v1/banner/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,bannerController.getBanner);
router.route('/device/api/v1/banner/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,bannerController.getBannerCount);
router.route('/device/api/v1/banner/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,bannerController.getBannerByAggregate);
router.route('/device/api/v1/banner/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,bannerController.updateBanner);    
router.route('/device/api/v1/banner/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,bannerController.partialUpdateBanner);
router.route('/device/api/v1/banner/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,bannerController.softDeleteBanner);
router.route('/device/api/v1/banner/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,bannerController.softDeleteManyBanner);
router.route('/device/api/v1/banner/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,bannerController.bulkInsertBanner);
router.route('/device/api/v1/banner/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,bannerController.bulkUpdateBanner);

module.exports = router;
