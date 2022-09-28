const express = require('express');
const router = express.Router();
const reviewsController = require('../../controller/admin/reviewsController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/reviews/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,reviewsController.addReviews);
router.route('/admin/reviews/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,reviewsController.findAllReviews);
router.route('/admin/reviews/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,reviewsController.getReviews);
router.route('/admin/reviews/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,reviewsController.getReviewsCount);
router.route('/admin/reviews/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,reviewsController.getReviewsByAggregate);
router.route('/admin/reviews/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,reviewsController.updateReviews);    
router.route('/admin/reviews/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,reviewsController.partialUpdateReviews);
router.route('/admin/reviews/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,reviewsController.softDeleteReviews);
router.route('/admin/reviews/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,reviewsController.softDeleteManyReviews);
router.route('/admin/reviews/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,reviewsController.bulkInsertReviews);
router.route('/admin/reviews/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,reviewsController.bulkUpdateReviews);

module.exports = router;
