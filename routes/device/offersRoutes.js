const express = require('express');
const router = express.Router();
const offersController = require('../../controller/device/offersController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/device/api/v1/offers/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,offersController.addOffers);
router.route('/device/api/v1/offers/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,offersController.findAllOffers);
router.route('/device/api/v1/offers/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,offersController.getOffers);
router.route('/device/api/v1/offers/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,offersController.getOffersCount);
router.route('/device/api/v1/offers/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,offersController.getOffersByAggregate);
router.route('/device/api/v1/offers/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,offersController.updateOffers);    
router.route('/device/api/v1/offers/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,offersController.partialUpdateOffers);
router.route('/device/api/v1/offers/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,offersController.softDeleteOffers);
router.route('/device/api/v1/offers/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,offersController.softDeleteManyOffers);
router.route('/device/api/v1/offers/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,offersController.bulkInsertOffers);
router.route('/device/api/v1/offers/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,offersController.bulkUpdateOffers);

module.exports = router;
