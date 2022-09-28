const express = require('express');
const router = express.Router();
const wishlistController = require('../../controller/admin/wishlistController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/wishlist/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,wishlistController.addWishlist);
router.route('/admin/wishlist/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,wishlistController.findAllWishlist);
router.route('/admin/wishlist/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,wishlistController.getWishlist);
router.route('/admin/wishlist/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,wishlistController.getWishlistCount);
router.route('/admin/wishlist/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,wishlistController.getWishlistByAggregate);
router.route('/admin/wishlist/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,wishlistController.updateWishlist);    
router.route('/admin/wishlist/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,wishlistController.partialUpdateWishlist);
router.route('/admin/wishlist/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,wishlistController.softDeleteWishlist);
router.route('/admin/wishlist/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,wishlistController.softDeleteManyWishlist);
router.route('/admin/wishlist/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,wishlistController.bulkInsertWishlist);
router.route('/admin/wishlist/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,wishlistController.bulkUpdateWishlist);

module.exports = router;
