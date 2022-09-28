const express = require('express');
const router = express.Router();
const reviewsController = require('../../controller/device/reviewsController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/device/api/v1/reviews/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,reviewsController.addReviews);
router.route('/device/api/v1/reviews/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,reviewsController.findAllReviews);
router.route('/device/api/v1/reviews/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,reviewsController.getReviews);
router.route('/device/api/v1/reviews/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,reviewsController.getReviewsCount);
router.route('/device/api/v1/reviews/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,reviewsController.getReviewsByAggregate);
router.route('/device/api/v1/reviews/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,reviewsController.updateReviews);    
router.route('/device/api/v1/reviews/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,reviewsController.partialUpdateReviews);
router.route('/device/api/v1/reviews/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,reviewsController.softDeleteReviews);
router.route('/device/api/v1/reviews/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,reviewsController.softDeleteManyReviews);
router.route('/device/api/v1/reviews/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,reviewsController.bulkInsertReviews);
router.route('/device/api/v1/reviews/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,reviewsController.bulkUpdateReviews);

module.exports = router;
