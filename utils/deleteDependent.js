let Master = require('../model/Master');
let Transactions = require('../model/transactions');
let ContactUs = require('../model/contactUs');
let Offers = require('../model/offers');
let Seller = require('../model/seller');
let NewsLatter = require('../model/newsLatter');
let Banner = require('../model/banner');
let Orders = require('../model/orders');
let Cart = require('../model/cart');
let Reviews = require('../model/reviews');
let Wishlist = require('../model/wishlist');
let Product = require('../model/product');
let ShortBySetting = require('../model/shortBySetting');
let ColorDetails = require('../model/colorDetails');
let User = require('../model/user');
let UserTokens = require('../model/userTokens');
let Role = require('../model/role');
let ProjectRoute = require('../model/projectRoute');
let RouteRole = require('../model/routeRole');
let UserRole = require('../model/userRole');
let dbService = require('.//dbService');

const deleteMaster = async (filter) =>{
  try {
    let master = await Master.find(filter, { _id:1 });
    if (master.length){
      master = master.map((obj) => obj._id);
      const MasterFilter5724 = { 'parentId': { '$in': master } };
      const Master2366 = await deleteMaster(MasterFilter5724);
      const transactionsFilter8492 = { 'paymentStatus': { '$in': master } };
      const transactions1280 = await deleteTransactions(transactionsFilter8492);
      const transactionsFilter4568 = { 'paymentType': { '$in': master } };
      const transactions2023 = await deleteTransactions(transactionsFilter4568);
      const bannerFilter3594 = { 'bannerType': { '$in': master } };
      const banner9984 = await deleteBanner(bannerFilter3594);
      const ordersFilter3279 = { 'orderStatus': { '$in': master } };
      const orders9837 = await deleteOrders(ordersFilter3279);
      const productFilter9625 = { 'brand': { '$in': master } };
      const product8243 = await deleteProduct(productFilter9625);
      const productFilter9578 = { 'category': { '$in': master } };
      const product7047 = await deleteProduct(productFilter9578);
      return await Master.deleteMany(filter);
    } else {
      return 'No Master found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteTransactions = async (filter) =>{
  try {
    return await Transactions.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteContactUs = async (filter) =>{
  try {
    return await ContactUs.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteOffers = async (filter) =>{
  try {
    return await Offers.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteSeller = async (filter) =>{
  try {
    return await Seller.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteNewsLatter = async (filter) =>{
  try {
    return await NewsLatter.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteBanner = async (filter) =>{
  try {
    return await Banner.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteOrders = async (filter) =>{
  try {
    let orders = await Orders.find(filter, { _id:1 });
    if (orders.length){
      orders = orders.map((obj) => obj._id);
      const transactionsFilter5983 = { 'orderId': { '$in': orders } };
      const transactions7206 = await deleteTransactions(transactionsFilter5983);
      return await Orders.deleteMany(filter);
    } else {
      return 'No orders found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteCart = async (filter) =>{
  try {
    let cart = await Cart.find(filter, { _id:1 });
    if (cart.length){
      cart = cart.map((obj) => obj._id);
      const ordersFilter7688 = { 'cartId': { '$in': cart } };
      const orders6072 = await deleteOrders(ordersFilter7688);
      return await Cart.deleteMany(filter);
    } else {
      return 'No cart found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteReviews = async (filter) =>{
  try {
    return await Reviews.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteWishlist = async (filter) =>{
  try {
    return await Wishlist.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteProduct = async (filter) =>{
  try {
    let product = await Product.find(filter, { _id:1 });
    if (product.length){
      product = product.map((obj) => obj._id);
      const cartFilter7641 = { 'product': { '$in': product } };
      const cart6736 = await deleteCart(cartFilter7641);
      const reviewsFilter8855 = { 'product': { '$in': product } };
      const reviews7267 = await deleteReviews(reviewsFilter8855);
      const wishlistFilter3252 = { 'product': { '$in': product } };
      const wishlist4854 = await deleteWishlist(wishlistFilter3252);
      return await Product.deleteMany(filter);
    } else {
      return 'No product found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteShortBySetting = async (filter) =>{
  try {
    return await ShortBySetting.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteColorDetails = async (filter) =>{
  try {
    return await ColorDetails.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const MasterFilter2640 = { 'updatedBy': { '$in': user } };
      const Master3624 = await deleteMaster(MasterFilter2640);
      const MasterFilter5225 = { 'addedBy': { '$in': user } };
      const Master7718 = await deleteMaster(MasterFilter5225);
      const transactionsFilter8177 = { 'addedBy': { '$in': user } };
      const transactions2242 = await deleteTransactions(transactionsFilter8177);
      const transactionsFilter9677 = { 'updatedBy': { '$in': user } };
      const transactions7941 = await deleteTransactions(transactionsFilter9677);
      const contactUsFilter5199 = { 'addedBy': { '$in': user } };
      const contactUs2005 = await deleteContactUs(contactUsFilter5199);
      const contactUsFilter6379 = { 'updatedBy': { '$in': user } };
      const contactUs3687 = await deleteContactUs(contactUsFilter6379);
      const contactUsFilter7870 = { 'user': { '$in': user } };
      const contactUs5736 = await deleteContactUs(contactUsFilter7870);
      const offersFilter3558 = { 'addedBy': { '$in': user } };
      const offers7773 = await deleteOffers(offersFilter3558);
      const offersFilter1976 = { 'updatedBy': { '$in': user } };
      const offers9956 = await deleteOffers(offersFilter1976);
      const sellerFilter5243 = { 'addedBy': { '$in': user } };
      const seller5269 = await deleteSeller(sellerFilter5243);
      const sellerFilter3818 = { 'updatedBy': { '$in': user } };
      const seller8446 = await deleteSeller(sellerFilter3818);
      const newsLatterFilter3713 = { 'addedBy': { '$in': user } };
      const newsLatter5186 = await deleteNewsLatter(newsLatterFilter3713);
      const newsLatterFilter1537 = { 'updatedBy': { '$in': user } };
      const newsLatter0137 = await deleteNewsLatter(newsLatterFilter1537);
      const bannerFilter2088 = { 'addedBy': { '$in': user } };
      const banner9133 = await deleteBanner(bannerFilter2088);
      const bannerFilter2783 = { 'updatedBy': { '$in': user } };
      const banner7199 = await deleteBanner(bannerFilter2783);
      const ordersFilter2655 = { 'addedBy': { '$in': user } };
      const orders5929 = await deleteOrders(ordersFilter2655);
      const ordersFilter0562 = { 'updatedBy': { '$in': user } };
      const orders7991 = await deleteOrders(ordersFilter0562);
      const ordersFilter7330 = { 'deliveryAddress': { '$in': user } };
      const orders3514 = await deleteOrders(ordersFilter7330);
      const cartFilter8831 = { 'user': { '$in': user } };
      const cart3137 = await deleteCart(cartFilter8831);
      const reviewsFilter0430 = { 'user': { '$in': user } };
      const reviews5453 = await deleteReviews(reviewsFilter0430);
      const wishlistFilter9470 = { 'user': { '$in': user } };
      const wishlist7879 = await deleteWishlist(wishlistFilter9470);
      const productFilter7150 = { 'addedBy': { '$in': user } };
      const product9654 = await deleteProduct(productFilter7150);
      const productFilter4175 = { 'updatedBy': { '$in': user } };
      const product8574 = await deleteProduct(productFilter4175);
      const shortBySettingFilter4346 = { 'addedBy': { '$in': user } };
      const shortBySetting8158 = await deleteShortBySetting(shortBySettingFilter4346);
      const shortBySettingFilter6913 = { 'updatedBy': { '$in': user } };
      const shortBySetting4765 = await deleteShortBySetting(shortBySettingFilter6913);
      const colorDetailsFilter1495 = { 'addedBy': { '$in': user } };
      const colorDetails1497 = await deleteColorDetails(colorDetailsFilter1495);
      const colorDetailsFilter7856 = { 'updatedBy': { '$in': user } };
      const colorDetails7849 = await deleteColorDetails(colorDetailsFilter7856);
      const userFilter7038 = { 'addedBy': { '$in': user } };
      const user3199 = await deleteUser(userFilter7038);
      const userFilter5286 = { 'updatedBy': { '$in': user } };
      const user1343 = await deleteUser(userFilter5286);
      const userTokensFilter8726 = { 'userId': { '$in': user } };
      const userTokens7388 = await deleteUserTokens(userTokensFilter8726);
      const userRoleFilter8270 = { 'userId': { '$in': user } };
      const userRole3334 = await deleteUserRole(userRoleFilter8270);
      return await User.deleteMany(filter);
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserTokens = async (filter) =>{
  try {
    return await UserTokens.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRole = async (filter) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter0322 = { 'roleId': { '$in': role } };
      const routeRole8456 = await deleteRouteRole(routeRoleFilter0322);
      const userRoleFilter9549 = { 'roleId': { '$in': role } };
      const userRole5689 = await deleteUserRole(userRoleFilter9549);
      return await Role.deleteMany(filter);
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteProjectRoute = async (filter) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter3561 = { 'routeId': { '$in': projectroute } };
      const routeRole3377 = await deleteRouteRole(routeRoleFilter3561);
      return await ProjectRoute.deleteMany(filter);
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRouteRole = async (filter) =>{
  try {
    return await RouteRole.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserRole = async (filter) =>{
  try {
    return await UserRole.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const countMaster = async (filter) =>{
  try {
    let master = await Master.find(filter, { _id:1 });
    if (master.length){
      master = master.map((obj) => obj._id);
      const MasterFilter5223 = { 'parentId': { '$in': master } };
      const Master4477Cnt = await countMaster(MasterFilter5223);
      const transactionsFilter3688 = { 'paymentStatus': { '$in': master } };
      const transactions9454Cnt = await countTransactions(transactionsFilter3688);
      const transactionsFilter0620 = { 'paymentType': { '$in': master } };
      const transactions5346Cnt = await countTransactions(transactionsFilter0620);
      const bannerFilter9497 = { 'bannerType': { '$in': master } };
      const banner8614Cnt = await countBanner(bannerFilter9497);
      const ordersFilter6608 = { 'orderStatus': { '$in': master } };
      const orders6928Cnt = await countOrders(ordersFilter6608);
      const productFilter3017 = { 'brand': { '$in': master } };
      const product0274Cnt = await countProduct(productFilter3017);
      const productFilter1182 = { 'category': { '$in': master } };
      const product5819Cnt = await countProduct(productFilter1182);
      const MasterCnt =  await Master.countDocuments(filter);
      let response = { Master : MasterCnt  };
      response = {
        ...response,
        ...Master4477Cnt,
        ...transactions9454Cnt,
        ...transactions5346Cnt,
        ...banner8614Cnt,
        ...orders6928Cnt,
        ...product0274Cnt,
        ...product5819Cnt,
      };
      return response;
    } else {
      return 'No Master found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countTransactions = async (filter) =>{
  try {
    const transactionsCnt =  await Transactions.countDocuments(filter);
    return { transactions : transactionsCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countContactUs = async (filter) =>{
  try {
    const contactUsCnt =  await ContactUs.countDocuments(filter);
    return { contactUs : contactUsCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countOffers = async (filter) =>{
  try {
    const offersCnt =  await Offers.countDocuments(filter);
    return { offers : offersCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countSeller = async (filter) =>{
  try {
    const sellerCnt =  await Seller.countDocuments(filter);
    return { seller : sellerCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countNewsLatter = async (filter) =>{
  try {
    const newsLatterCnt =  await NewsLatter.countDocuments(filter);
    return { newsLatter : newsLatterCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countBanner = async (filter) =>{
  try {
    const bannerCnt =  await Banner.countDocuments(filter);
    return { banner : bannerCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countOrders = async (filter) =>{
  try {
    let orders = await Orders.find(filter, { _id:1 });
    if (orders.length){
      orders = orders.map((obj) => obj._id);
      const transactionsFilter6771 = { 'orderId': { '$in': orders } };
      const transactions5625Cnt = await countTransactions(transactionsFilter6771);
      const ordersCnt =  await Orders.countDocuments(filter);
      let response = { orders : ordersCnt  };
      response = {
        ...response,
        ...transactions5625Cnt,
      };
      return response;
    } else {
      return 'No orders found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countCart = async (filter) =>{
  try {
    let cart = await Cart.find(filter, { _id:1 });
    if (cart.length){
      cart = cart.map((obj) => obj._id);
      const ordersFilter2966 = { 'cartId': { '$in': cart } };
      const orders3279Cnt = await countOrders(ordersFilter2966);
      const cartCnt =  await Cart.countDocuments(filter);
      let response = { cart : cartCnt  };
      response = {
        ...response,
        ...orders3279Cnt,
      };
      return response;
    } else {
      return 'No cart found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countReviews = async (filter) =>{
  try {
    const reviewsCnt =  await Reviews.countDocuments(filter);
    return { reviews : reviewsCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countWishlist = async (filter) =>{
  try {
    const wishlistCnt =  await Wishlist.countDocuments(filter);
    return { wishlist : wishlistCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countProduct = async (filter) =>{
  try {
    let product = await Product.find(filter, { _id:1 });
    if (product.length){
      product = product.map((obj) => obj._id);
      const cartFilter9225 = { 'product': { '$in': product } };
      const cart1164Cnt = await countCart(cartFilter9225);
      const reviewsFilter1387 = { 'product': { '$in': product } };
      const reviews8399Cnt = await countReviews(reviewsFilter1387);
      const wishlistFilter1176 = { 'product': { '$in': product } };
      const wishlist6581Cnt = await countWishlist(wishlistFilter1176);
      const productCnt =  await Product.countDocuments(filter);
      let response = { product : productCnt  };
      response = {
        ...response,
        ...cart1164Cnt,
        ...reviews8399Cnt,
        ...wishlist6581Cnt,
      };
      return response;
    } else {
      return 'No product found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countShortBySetting = async (filter) =>{
  try {
    const shortBySettingCnt =  await ShortBySetting.countDocuments(filter);
    return { shortBySetting : shortBySettingCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countColorDetails = async (filter) =>{
  try {
    const colorDetailsCnt =  await ColorDetails.countDocuments(filter);
    return { colorDetails : colorDetailsCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const MasterFilter2508 = { 'updatedBy': { '$in': user } };
      const Master1958Cnt = await countMaster(MasterFilter2508);
      const MasterFilter6268 = { 'addedBy': { '$in': user } };
      const Master7868Cnt = await countMaster(MasterFilter6268);
      const transactionsFilter9526 = { 'addedBy': { '$in': user } };
      const transactions2395Cnt = await countTransactions(transactionsFilter9526);
      const transactionsFilter3745 = { 'updatedBy': { '$in': user } };
      const transactions6711Cnt = await countTransactions(transactionsFilter3745);
      const contactUsFilter5442 = { 'addedBy': { '$in': user } };
      const contactUs5302Cnt = await countContactUs(contactUsFilter5442);
      const contactUsFilter3627 = { 'updatedBy': { '$in': user } };
      const contactUs0594Cnt = await countContactUs(contactUsFilter3627);
      const contactUsFilter4974 = { 'user': { '$in': user } };
      const contactUs3673Cnt = await countContactUs(contactUsFilter4974);
      const offersFilter0343 = { 'addedBy': { '$in': user } };
      const offers4094Cnt = await countOffers(offersFilter0343);
      const offersFilter5776 = { 'updatedBy': { '$in': user } };
      const offers7487Cnt = await countOffers(offersFilter5776);
      const sellerFilter7184 = { 'addedBy': { '$in': user } };
      const seller0834Cnt = await countSeller(sellerFilter7184);
      const sellerFilter2007 = { 'updatedBy': { '$in': user } };
      const seller0063Cnt = await countSeller(sellerFilter2007);
      const newsLatterFilter5840 = { 'addedBy': { '$in': user } };
      const newsLatter3158Cnt = await countNewsLatter(newsLatterFilter5840);
      const newsLatterFilter7188 = { 'updatedBy': { '$in': user } };
      const newsLatter9129Cnt = await countNewsLatter(newsLatterFilter7188);
      const bannerFilter5771 = { 'addedBy': { '$in': user } };
      const banner4240Cnt = await countBanner(bannerFilter5771);
      const bannerFilter1784 = { 'updatedBy': { '$in': user } };
      const banner9039Cnt = await countBanner(bannerFilter1784);
      const ordersFilter5660 = { 'addedBy': { '$in': user } };
      const orders4101Cnt = await countOrders(ordersFilter5660);
      const ordersFilter4274 = { 'updatedBy': { '$in': user } };
      const orders6658Cnt = await countOrders(ordersFilter4274);
      const ordersFilter6279 = { 'deliveryAddress': { '$in': user } };
      const orders4248Cnt = await countOrders(ordersFilter6279);
      const cartFilter9259 = { 'user': { '$in': user } };
      const cart7619Cnt = await countCart(cartFilter9259);
      const reviewsFilter6945 = { 'user': { '$in': user } };
      const reviews4454Cnt = await countReviews(reviewsFilter6945);
      const wishlistFilter1907 = { 'user': { '$in': user } };
      const wishlist3931Cnt = await countWishlist(wishlistFilter1907);
      const productFilter5034 = { 'addedBy': { '$in': user } };
      const product9097Cnt = await countProduct(productFilter5034);
      const productFilter3199 = { 'updatedBy': { '$in': user } };
      const product5683Cnt = await countProduct(productFilter3199);
      const shortBySettingFilter7962 = { 'addedBy': { '$in': user } };
      const shortBySetting7597Cnt = await countShortBySetting(shortBySettingFilter7962);
      const shortBySettingFilter4500 = { 'updatedBy': { '$in': user } };
      const shortBySetting2433Cnt = await countShortBySetting(shortBySettingFilter4500);
      const colorDetailsFilter1236 = { 'addedBy': { '$in': user } };
      const colorDetails3127Cnt = await countColorDetails(colorDetailsFilter1236);
      const colorDetailsFilter5806 = { 'updatedBy': { '$in': user } };
      const colorDetails1395Cnt = await countColorDetails(colorDetailsFilter5806);
      const userFilter2325 = { 'addedBy': { '$in': user } };
      const user6940Cnt = await countUser(userFilter2325);
      const userFilter8807 = { 'updatedBy': { '$in': user } };
      const user7565Cnt = await countUser(userFilter8807);
      const userTokensFilter8444 = { 'userId': { '$in': user } };
      const userTokens9552Cnt = await countUserTokens(userTokensFilter8444);
      const userRoleFilter9747 = { 'userId': { '$in': user } };
      const userRole6256Cnt = await countUserRole(userRoleFilter9747);
      const userCnt =  await User.countDocuments(filter);
      let response = { user : userCnt  };
      response = {
        ...response,
        ...Master1958Cnt,
        ...Master7868Cnt,
        ...transactions2395Cnt,
        ...transactions6711Cnt,
        ...contactUs5302Cnt,
        ...contactUs0594Cnt,
        ...contactUs3673Cnt,
        ...offers4094Cnt,
        ...offers7487Cnt,
        ...seller0834Cnt,
        ...seller0063Cnt,
        ...newsLatter3158Cnt,
        ...newsLatter9129Cnt,
        ...banner4240Cnt,
        ...banner9039Cnt,
        ...orders4101Cnt,
        ...orders6658Cnt,
        ...orders4248Cnt,
        ...cart7619Cnt,
        ...reviews4454Cnt,
        ...wishlist3931Cnt,
        ...product9097Cnt,
        ...product5683Cnt,
        ...shortBySetting7597Cnt,
        ...shortBySetting2433Cnt,
        ...colorDetails3127Cnt,
        ...colorDetails1395Cnt,
        ...user6940Cnt,
        ...user7565Cnt,
        ...userTokens9552Cnt,
        ...userRole6256Cnt,
      };
      return response;
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserTokens = async (filter) =>{
  try {
    const userTokensCnt =  await UserTokens.countDocuments(filter);
    return { userTokens : userTokensCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countRole = async (filter) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter9120 = { 'roleId': { '$in': role } };
      const routeRole8889Cnt = await countRouteRole(routeRoleFilter9120);
      const userRoleFilter2078 = { 'roleId': { '$in': role } };
      const userRole6729Cnt = await countUserRole(userRoleFilter2078);
      const roleCnt =  await Role.countDocuments(filter);
      let response = { role : roleCnt  };
      response = {
        ...response,
        ...routeRole8889Cnt,
        ...userRole6729Cnt,
      };
      return response;
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countProjectRoute = async (filter) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter2926 = { 'routeId': { '$in': projectroute } };
      const routeRole3768Cnt = await countRouteRole(routeRoleFilter2926);
      const projectRouteCnt =  await ProjectRoute.countDocuments(filter);
      let response = { projectRoute : projectRouteCnt  };
      response = {
        ...response,
        ...routeRole3768Cnt,
      };
      return response;
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countRouteRole = async (filter) =>{
  try {
    const routeRoleCnt =  await RouteRole.countDocuments(filter);
    return { routeRole : routeRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserRole = async (filter) =>{
  try {
    const userRoleCnt =  await UserRole.countDocuments(filter);
    return { userRole : userRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteMaster = async (filter,loggedInUser) =>{
  try {
    let master = await Master.find(filter, { _id:1 });
    if (master.length){
      master = master.map((obj) => obj._id);
      const MasterFilter6540 = { 'parentId': { '$in': master } };
      const Master1970 = await softDeleteMaster(MasterFilter6540);
      const transactionsFilter8309 = { 'paymentStatus': { '$in': master } };
      const transactions2983 = await softDeleteTransactions(transactionsFilter8309);
      const transactionsFilter9686 = { 'paymentType': { '$in': master } };
      const transactions8377 = await softDeleteTransactions(transactionsFilter9686);
      const bannerFilter7293 = { 'bannerType': { '$in': master } };
      const banner6372 = await softDeleteBanner(bannerFilter7293);
      const ordersFilter5720 = { 'orderStatus': { '$in': master } };
      const orders9635 = await softDeleteOrders(ordersFilter5720);
      const productFilter2424 = { 'brand': { '$in': master } };
      const product2844 = await softDeleteProduct(productFilter2424);
      const productFilter7344 = { 'category': { '$in': master } };
      const product1793 = await softDeleteProduct(productFilter7344);
      if (loggedInUser && loggedInUser.id)
        return await Master.updateMany(filter, {
          isDeleted:true,
          updatedBy:loggedInUser.id
        });
      else
        return await Master.updateMany(filter,{ isDeleted:true });
    } else {
      return 'No Master found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteTransactions = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await Transactions.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await Transactions.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteContactUs = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await ContactUs.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await ContactUs.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteOffers = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await Offers.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await Offers.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteSeller = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await Seller.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await Seller.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteNewsLatter = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await NewsLatter.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await NewsLatter.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteBanner = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await Banner.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await Banner.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteOrders = async (filter,loggedInUser) =>{
  try {
    let orders = await Orders.find(filter, { _id:1 });
    if (orders.length){
      orders = orders.map((obj) => obj._id);
      const transactionsFilter2031 = { 'orderId': { '$in': orders } };
      const transactions3268 = await softDeleteTransactions(transactionsFilter2031);
      if (loggedInUser && loggedInUser.id)
        return await Orders.updateMany(filter, {
          isDeleted:true,
          updatedBy:loggedInUser.id
        });
      else
        return await Orders.updateMany(filter,{ isDeleted:true });
    } else {
      return 'No orders found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteCart = async (filter,loggedInUser) =>{
  try {
    let cart = await Cart.find(filter, { _id:1 });
    if (cart.length){
      cart = cart.map((obj) => obj._id);
      const ordersFilter5722 = { 'cartId': { '$in': cart } };
      const orders5584 = await softDeleteOrders(ordersFilter5722);
      if (loggedInUser && loggedInUser.id)
        return await Cart.updateMany(filter, {
          isDeleted:true,
          updatedBy:loggedInUser.id
        });
      else
        return await Cart.updateMany(filter,{ isDeleted:true });
    } else {
      return 'No cart found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteReviews = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await Reviews.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await Reviews.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteWishlist = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await Wishlist.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await Wishlist.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteProduct = async (filter,loggedInUser) =>{
  try {
    let product = await Product.find(filter, { _id:1 });
    if (product.length){
      product = product.map((obj) => obj._id);
      const cartFilter8423 = { 'product': { '$in': product } };
      const cart7746 = await softDeleteCart(cartFilter8423);
      const reviewsFilter2403 = { 'product': { '$in': product } };
      const reviews3833 = await softDeleteReviews(reviewsFilter2403);
      const wishlistFilter7632 = { 'product': { '$in': product } };
      const wishlist9157 = await softDeleteWishlist(wishlistFilter7632);
      if (loggedInUser && loggedInUser.id)
        return await Product.updateMany(filter, {
          isDeleted:true,
          updatedBy:loggedInUser.id
        });
      else
        return await Product.updateMany(filter,{ isDeleted:true });
    } else {
      return 'No product found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteShortBySetting = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await ShortBySetting.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await ShortBySetting.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteColorDetails = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await ColorDetails.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await ColorDetails.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUser = async (filter,loggedInUser) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const MasterFilter4619 = { 'updatedBy': { '$in': user } };
      const Master6461 = await softDeleteMaster(MasterFilter4619);
      const MasterFilter7775 = { 'addedBy': { '$in': user } };
      const Master2672 = await softDeleteMaster(MasterFilter7775);
      const transactionsFilter4083 = { 'addedBy': { '$in': user } };
      const transactions9228 = await softDeleteTransactions(transactionsFilter4083);
      const transactionsFilter8581 = { 'updatedBy': { '$in': user } };
      const transactions9963 = await softDeleteTransactions(transactionsFilter8581);
      const contactUsFilter3493 = { 'addedBy': { '$in': user } };
      const contactUs2448 = await softDeleteContactUs(contactUsFilter3493);
      const contactUsFilter3527 = { 'updatedBy': { '$in': user } };
      const contactUs2497 = await softDeleteContactUs(contactUsFilter3527);
      const contactUsFilter7745 = { 'user': { '$in': user } };
      const contactUs7794 = await softDeleteContactUs(contactUsFilter7745);
      const offersFilter4433 = { 'addedBy': { '$in': user } };
      const offers8136 = await softDeleteOffers(offersFilter4433);
      const offersFilter9672 = { 'updatedBy': { '$in': user } };
      const offers8326 = await softDeleteOffers(offersFilter9672);
      const sellerFilter9759 = { 'addedBy': { '$in': user } };
      const seller2935 = await softDeleteSeller(sellerFilter9759);
      const sellerFilter6556 = { 'updatedBy': { '$in': user } };
      const seller8603 = await softDeleteSeller(sellerFilter6556);
      const newsLatterFilter4747 = { 'addedBy': { '$in': user } };
      const newsLatter1945 = await softDeleteNewsLatter(newsLatterFilter4747);
      const newsLatterFilter6453 = { 'updatedBy': { '$in': user } };
      const newsLatter6949 = await softDeleteNewsLatter(newsLatterFilter6453);
      const bannerFilter8943 = { 'addedBy': { '$in': user } };
      const banner7233 = await softDeleteBanner(bannerFilter8943);
      const bannerFilter1335 = { 'updatedBy': { '$in': user } };
      const banner8742 = await softDeleteBanner(bannerFilter1335);
      const ordersFilter8895 = { 'addedBy': { '$in': user } };
      const orders6551 = await softDeleteOrders(ordersFilter8895);
      const ordersFilter6263 = { 'updatedBy': { '$in': user } };
      const orders6668 = await softDeleteOrders(ordersFilter6263);
      const ordersFilter6308 = { 'deliveryAddress': { '$in': user } };
      const orders9569 = await softDeleteOrders(ordersFilter6308);
      const cartFilter6743 = { 'user': { '$in': user } };
      const cart4859 = await softDeleteCart(cartFilter6743);
      const reviewsFilter2877 = { 'user': { '$in': user } };
      const reviews9735 = await softDeleteReviews(reviewsFilter2877);
      const wishlistFilter6325 = { 'user': { '$in': user } };
      const wishlist4990 = await softDeleteWishlist(wishlistFilter6325);
      const productFilter7335 = { 'addedBy': { '$in': user } };
      const product1164 = await softDeleteProduct(productFilter7335);
      const productFilter7218 = { 'updatedBy': { '$in': user } };
      const product8065 = await softDeleteProduct(productFilter7218);
      const shortBySettingFilter4855 = { 'addedBy': { '$in': user } };
      const shortBySetting4968 = await softDeleteShortBySetting(shortBySettingFilter4855);
      const shortBySettingFilter8456 = { 'updatedBy': { '$in': user } };
      const shortBySetting4853 = await softDeleteShortBySetting(shortBySettingFilter8456);
      const colorDetailsFilter6778 = { 'addedBy': { '$in': user } };
      const colorDetails9205 = await softDeleteColorDetails(colorDetailsFilter6778);
      const colorDetailsFilter8202 = { 'updatedBy': { '$in': user } };
      const colorDetails0267 = await softDeleteColorDetails(colorDetailsFilter8202);
      const userFilter3623 = { 'addedBy': { '$in': user } };
      const user8959 = await softDeleteUser(userFilter3623);
      const userFilter2122 = { 'updatedBy': { '$in': user } };
      const user8792 = await softDeleteUser(userFilter2122);
      const userTokensFilter6724 = { 'userId': { '$in': user } };
      const userTokens3590 = await softDeleteUserTokens(userTokensFilter6724);
      const userRoleFilter4866 = { 'userId': { '$in': user } };
      const userRole9346 = await softDeleteUserRole(userRoleFilter4866);
      if (loggedInUser && loggedInUser.id)
        return await User.updateMany(filter, {
          isDeleted:true,
          updatedBy:loggedInUser.id
        });
      else
        return await User.updateMany(filter,{ isDeleted:true });
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserTokens = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await UserTokens.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await UserTokens.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRole = async (filter,loggedInUser) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter8274 = { 'roleId': { '$in': role } };
      const routeRole6370 = await softDeleteRouteRole(routeRoleFilter8274);
      const userRoleFilter6475 = { 'roleId': { '$in': role } };
      const userRole4263 = await softDeleteUserRole(userRoleFilter6475);
      if (loggedInUser && loggedInUser.id)
        return await Role.updateMany(filter, {
          isDeleted:true,
          updatedBy:loggedInUser.id
        });
      else
        return await Role.updateMany(filter,{ isDeleted:true });
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteProjectRoute = async (filter,loggedInUser) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter2860 = { 'routeId': { '$in': projectroute } };
      const routeRole2720 = await softDeleteRouteRole(routeRoleFilter2860);
      if (loggedInUser && loggedInUser.id)
        return await ProjectRoute.updateMany(filter, {
          isDeleted:true,
          updatedBy:loggedInUser.id
        });
      else
        return await ProjectRoute.updateMany(filter,{ isDeleted:true });
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRouteRole = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await RouteRole.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await RouteRole.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserRole = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await UserRole.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await UserRole.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

module.exports = {
  deleteMaster,
  deleteTransactions,
  deleteContactUs,
  deleteOffers,
  deleteSeller,
  deleteNewsLatter,
  deleteBanner,
  deleteOrders,
  deleteCart,
  deleteReviews,
  deleteWishlist,
  deleteProduct,
  deleteShortBySetting,
  deleteColorDetails,
  deleteUser,
  deleteUserTokens,
  deleteRole,
  deleteProjectRoute,
  deleteRouteRole,
  deleteUserRole,
  countMaster,
  countTransactions,
  countContactUs,
  countOffers,
  countSeller,
  countNewsLatter,
  countBanner,
  countOrders,
  countCart,
  countReviews,
  countWishlist,
  countProduct,
  countShortBySetting,
  countColorDetails,
  countUser,
  countUserTokens,
  countRole,
  countProjectRoute,
  countRouteRole,
  countUserRole,
  softDeleteMaster,
  softDeleteTransactions,
  softDeleteContactUs,
  softDeleteOffers,
  softDeleteSeller,
  softDeleteNewsLatter,
  softDeleteBanner,
  softDeleteOrders,
  softDeleteCart,
  softDeleteReviews,
  softDeleteWishlist,
  softDeleteProduct,
  softDeleteShortBySetting,
  softDeleteColorDetails,
  softDeleteUser,
  softDeleteUserTokens,
  softDeleteRole,
  softDeleteProjectRoute,
  softDeleteRouteRole,
  softDeleteUserRole,
};
