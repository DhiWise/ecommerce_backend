const express = require('express');
const router = express.Router();
const offersController = require('../../controller/admin/offersController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/offers/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,offersController.addOffers);
router.route('/admin/offers/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,offersController.findAllOffers);
router.route('/admin/offers/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,offersController.getOffers);
router.route('/admin/offers/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,offersController.getOffersCount);
router.route('/admin/offers/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,offersController.getOffersByAggregate);
router.route('/admin/offers/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,offersController.updateOffers);    
router.route('/admin/offers/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,offersController.partialUpdateOffers);
router.route('/admin/offers/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,offersController.softDeleteOffers);
router.route('/admin/offers/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,offersController.softDeleteManyOffers);
router.route('/admin/offers/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,offersController.bulkInsertOffers);
router.route('/admin/offers/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,offersController.bulkUpdateOffers);

module.exports = router;
