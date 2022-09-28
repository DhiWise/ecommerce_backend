const express = require('express');
const router = express.Router();
const wishlistController = require('../../controller/device/wishlistController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/device/api/v1/wishlist/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,wishlistController.addWishlist);
router.route('/device/api/v1/wishlist/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,wishlistController.findAllWishlist);
router.route('/device/api/v1/wishlist/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,wishlistController.getWishlist);
router.route('/device/api/v1/wishlist/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,wishlistController.getWishlistCount);
router.route('/device/api/v1/wishlist/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,wishlistController.getWishlistByAggregate);
router.route('/device/api/v1/wishlist/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,wishlistController.updateWishlist);    
router.route('/device/api/v1/wishlist/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,wishlistController.partialUpdateWishlist);
router.route('/device/api/v1/wishlist/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,wishlistController.softDeleteWishlist);
router.route('/device/api/v1/wishlist/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,wishlistController.softDeleteManyWishlist);
router.route('/device/api/v1/wishlist/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,wishlistController.bulkInsertWishlist);
router.route('/device/api/v1/wishlist/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,wishlistController.bulkUpdateWishlist);

module.exports = router;
