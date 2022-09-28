const express = require('express');
const router = express.Router();
const bannerController = require('../../controller/admin/bannerController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/banner/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,bannerController.addBanner);
router.route('/admin/banner/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,bannerController.findAllBanner);
router.route('/admin/banner/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,bannerController.getBanner);
router.route('/admin/banner/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,bannerController.getBannerCount);
router.route('/admin/banner/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,bannerController.getBannerByAggregate);
router.route('/admin/banner/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,bannerController.updateBanner);    
router.route('/admin/banner/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,bannerController.partialUpdateBanner);
router.route('/admin/banner/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,bannerController.softDeleteBanner);
router.route('/admin/banner/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,bannerController.softDeleteManyBanner);
router.route('/admin/banner/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,bannerController.bulkInsertBanner);
router.route('/admin/banner/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,bannerController.bulkUpdateBanner);

module.exports = router;
