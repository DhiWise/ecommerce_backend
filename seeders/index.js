
const User = require('../model/user');
const authConstant = require('../constants/authConstant');
const Role = require('../model/role');
const ProjectRoute = require('../model/projectRoute');
const RouteRole = require('../model/routeRole');
const UserRole = require('../model/userRole');
const { replaceAll } = require('../utils/common');

async function seedRole () {
  try {
    const roles = [ 'Customer', 'User', 'SYSTEM_USER', 'Admin' ];
    for (let i = 0; i < roles.length; i++) {
      let result = await Role.findOne({
        name: roles[i],
        isActive: true,
        isDeleted: false 
      });
      if (!result) {
        await Role.create({
          name: roles[i],
          code: roles[i].toUpperCase(),
          weight: 1
        });
      }
    };
    console.info('Role model seeded 🍺');
  } catch (error){
    console.log('Role seeder failed.');
  }
}
async function seedProjectRoutes (routes) {
  try {
    if (routes && routes.length) {
      for (let i = 0; i < routes.length; i++) {
        const routeMethods = routes[i].methods;
        for (let j = 0; j < routeMethods.length; j++) {
          const routeObj = {
            uri: routes[i].path.toLowerCase(),
            method: routeMethods[j],
            route_name: `${replaceAll((routes[i].path).toLowerCase().substring(1), '/', '_')}`,
            isActive: true, 
            isDeleted: false
          };
          if (routeObj.route_name){
            let result = await ProjectRoute.findOne(routeObj);
            if (!result) {
              await ProjectRoute.create(routeObj);
            }
          }
        }
      }
      console.info('ProjectRoute model seeded 🍺');
    }
  } catch (error){
    console.log('ProjectRoute seeder failed.');
  }
}
async function seedRouteRole () {
  try {
    const routeRoles = [ 
      {
        route: '/admin/cart/create',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/cart/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/cart/create',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/cart/list',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/cart/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/cart/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/cart/list',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/cart/aggregate',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/cart/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/cart/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/cart/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/cart/:id',
        role: 'Customer',
        method: 'GET' 
      },
      {
        route: '/admin/cart/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/cart/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/cart/:id',
        role: 'SYSTEM_USER',
        method: 'GET' 
      },
      {
        route: '/admin/cart/count',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/cart/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/cart/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/cart/count',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/cart/update/:id',
        role: 'Customer',
        method: 'PUT' 
      },
      {
        route: '/admin/cart/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/cart/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT' 
      },
      {
        route: '/admin/cart/partial-update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/admin/cart/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/cart/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/cart/softdelete/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/admin/cart/softdelete/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/cart/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/cart/softdeletemany',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/admin/cart/softdeletemany',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/cart/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/cart/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/cart/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/cart/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/cart/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT' 
      },
      {
        route: '/admin/contactus/create',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/contactus/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/contactus/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/contactus/list',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/contactus/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/contactus/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/contactus/list',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/contactus/aggregate',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/admin/contactus/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/contactus/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/contactus/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/contactus/:id',
        role: 'Customer',
        method: 'GET' 
      },
      {
        route: '/admin/contactus/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/contactus/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/contactus/:id',
        role: 'SYSTEM_USER',
        method: 'GET' 
      },
      {
        route: '/admin/contactus/count',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/contactus/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/contactus/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/contactus/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/contactus/update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/admin/contactus/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/contactus/update/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/contactus/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/contactus/partial-update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/admin/contactus/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/contactus/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/contactus/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/contactus/softdelete/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/admin/contactus/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/contactus/softdeletemany',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/admin/contactus/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/contactus/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/contactus/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/contactus/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/contactus/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/newslatter/create',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/newslatter/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/newslatter/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/newslatter/list',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/newslatter/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/newslatter/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/newslatter/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/newslatter/aggregate',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/admin/newslatter/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/newslatter/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/newslatter/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/newslatter/:id',
        role: 'Customer',
        method: 'GET' 
      },
      {
        route: '/admin/newslatter/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/newslatter/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/newslatter/:id',
        role: 'SYSTEM_USER',
        method: 'GET' 
      },
      {
        route: '/admin/newslatter/count',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/newslatter/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/newslatter/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/newslatter/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/newslatter/update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/admin/newslatter/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/newslatter/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/newslatter/partial-update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/admin/newslatter/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/newslatter/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/newslatter/softdelete/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/admin/newslatter/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/newslatter/softdeletemany',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/admin/newslatter/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/newslatter/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/newslatter/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/newslatter/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/newslatter/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/orders/create',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/orders/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/orders/create',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/orders/list',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/orders/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/orders/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/orders/list',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/orders/aggregate',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/orders/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/orders/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/orders/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/orders/:id',
        role: 'Customer',
        method: 'GET' 
      },
      {
        route: '/admin/orders/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/orders/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/orders/:id',
        role: 'SYSTEM_USER',
        method: 'GET' 
      },
      {
        route: '/admin/orders/count',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/orders/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/orders/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/orders/count',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/orders/update/:id',
        role: 'Customer',
        method: 'PUT' 
      },
      {
        route: '/admin/orders/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/orders/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/orders/partial-update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/admin/orders/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/orders/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/orders/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/orders/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/orders/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/orders/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/orders/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/orders/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/product/list',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/product/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/product/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/product/list',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/product/aggregate',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/product/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/product/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/product/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/product/:id',
        role: 'Customer',
        method: 'GET' 
      },
      {
        route: '/admin/product/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/product/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/product/:id',
        role: 'SYSTEM_USER',
        method: 'GET' 
      },
      {
        route: '/admin/product/count',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/product/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/product/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/product/count',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/product/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/product/create',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/product/update/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/product/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/product/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/product/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/product/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/product/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/product/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/product/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/product/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/product/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/product/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/product/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/transactions/create',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/admin/transactions/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/transactions/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/transactions/list',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/transactions/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/transactions/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/transactions/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/transactions/aggregate',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/admin/transactions/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/admin/transactions/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/admin/transactions/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/transactions/:id',
        role: 'Customer',
        method: 'GET' 
      },
      {
        route: '/admin/transactions/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/transactions/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/transactions/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/admin/transactions/count',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/admin/transactions/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/transactions/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/transactions/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/transactions/update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/admin/transactions/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/transactions/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/transactions/partial-update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/admin/transactions/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/transactions/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/transactions/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/transactions/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/transactions/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/transactions/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/transactions/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/transactions/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/user/create',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/admin/user/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user/create',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/user/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/user/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/user/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/user/:id',
        role: 'SYSTEM_USER',
        method: 'GET' 
      },
      {
        route: '/admin/user/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user/count',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT' 
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/user/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/user/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/user/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/user/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT' 
      },
      {
        route: '/admin/master/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/master/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/master/create',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/master/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/master/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/master/list',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/master/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/master/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/master/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/master/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/master/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/master/:id',
        role: 'SYSTEM_USER',
        method: 'GET' 
      },
      {
        route: '/admin/master/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/master/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/master/count',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/master/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/master/update/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/master/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/master/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/master/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/master/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/master/softdelete/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/master/softdelete/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/master/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/master/softdeletemany',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/master/softdeletemany',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/master/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/master/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/master/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/master/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/master/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/banner/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/banner/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/banner/create',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/banner/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/banner/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/banner/list',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/banner/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/banner/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/banner/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/banner/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/banner/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/banner/:id',
        role: 'SYSTEM_USER',
        method: 'GET' 
      },
      {
        route: '/admin/banner/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/banner/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/banner/count',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/banner/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/banner/update/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/banner/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/banner/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/banner/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/banner/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/banner/softdelete/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/banner/softdelete/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/banner/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/banner/softdeletemany',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/banner/softdeletemany',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/banner/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/banner/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/banner/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/banner/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/banner/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/colordetails/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/colordetails/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/colordetails/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/colordetails/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/colordetails/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/colordetails/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/colordetails/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/admin/colordetails/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/admin/colordetails/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/colordetails/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/colordetails/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/colordetails/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/admin/colordetails/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/colordetails/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/colordetails/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/colordetails/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/colordetails/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/colordetails/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/colordetails/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/colordetails/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/colordetails/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/colordetails/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/colordetails/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/colordetails/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/colordetails/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/colordetails/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/colordetails/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/colordetails/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/colordetails/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/colordetails/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/colordetails/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/offers/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/offers/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/offers/list',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/offers/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/offers/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/offers/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/offers/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/offers/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/offers/:id',
        role: 'SYSTEM_USER',
        method: 'GET' 
      },
      {
        route: '/admin/offers/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/offers/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/offers/count',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/offers/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/offers/create',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/offers/update/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/offers/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/offers/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/offers/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/offers/softdelete/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/offers/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/offers/softdeletemany',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/offers/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/offers/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/offers/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/offers/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/offers/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/reviews/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/reviews/create',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/reviews/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/reviews/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/reviews/list',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/reviews/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/reviews/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/reviews/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/reviews/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/reviews/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/reviews/:id',
        role: 'SYSTEM_USER',
        method: 'GET' 
      },
      {
        route: '/admin/reviews/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/reviews/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/reviews/count',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/reviews/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/reviews/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/reviews/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/reviews/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/reviews/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/reviews/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/reviews/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/reviews/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/reviews/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/reviews/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/seller/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/seller/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/seller/list',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/seller/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/seller/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/seller/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/seller/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/seller/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/seller/:id',
        role: 'SYSTEM_USER',
        method: 'GET' 
      },
      {
        route: '/admin/seller/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/seller/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/seller/count',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/seller/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/seller/create',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/seller/update/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/seller/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/seller/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/seller/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/seller/softdelete/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/seller/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/seller/softdeletemany',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/seller/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/seller/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/seller/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/seller/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/seller/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/wishlist/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/wishlist/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/wishlist/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/wishlist/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/wishlist/list',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/wishlist/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/wishlist/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/wishlist/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/wishlist/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/wishlist/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/wishlist/:id',
        role: 'SYSTEM_USER',
        method: 'GET' 
      },
      {
        route: '/admin/wishlist/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/wishlist/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/wishlist/count',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/wishlist/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/wishlist/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/wishlist/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/wishlist/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/wishlist/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/wishlist/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/wishlist/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/wishlist/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/wishlist/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/wishlist/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/wishlist/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/wishlist/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/shortbysetting/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/admin/shortbysetting/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/shortbysetting/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/shortbysetting/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/shortbysetting/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/admin/shortbysetting/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/shortbysetting/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/shortbysetting/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/admin/shortbysetting/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/shortbysetting/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/shortbysetting/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/shortbysetting/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/shortbysetting/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/shortbysetting/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/shortbysetting/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/shortbysetting/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/shortbysetting/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/shortbysetting/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/shortbysetting/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/shortbysetting/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/shortbysetting/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/shortbysetting/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/:id',
        role: 'SYSTEM_USER',
        method: 'GET' 
      },
      {
        route: '/admin/usertokens/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/usertokens/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/usertokens/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/create',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/cart/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/list',
        role: 'Customer',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/cart/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/cart/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/cart/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/aggregate',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/:id',
        role: 'Customer',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/cart/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/cart/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/cart/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/cart/count',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/cart/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/cart/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/partial-update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/softdelete/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/softdeletemany',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/cart/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/cart/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/cart/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/cart/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/contactus/create',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/contactus/create',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/contactus/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/contactus/list',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/contactus/list',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/contactus/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/contactus/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/contactus/aggregate',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/contactus/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/contactus/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/contactus/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/contactus/:id',
        role: 'Customer',
        method: 'GET'
      },
      {
        route: '/device/api/v1/contactus/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/contactus/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/contactus/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/contactus/count',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/contactus/count',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/contactus/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/contactus/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/contactus/update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/contactus/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/contactus/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/contactus/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/contactus/partial-update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/contactus/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/contactus/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/contactus/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/contactus/softdelete/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/contactus/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/contactus/softdeletemany',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/contactus/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/contactus/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/contactus/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/contactus/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/contactus/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/newslatter/create',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/newslatter/create',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/newslatter/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/newslatter/list',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/newslatter/list',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/newslatter/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/newslatter/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/newslatter/aggregate',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/newslatter/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/newslatter/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/newslatter/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/newslatter/:id',
        role: 'Customer',
        method: 'GET'
      },
      {
        route: '/device/api/v1/newslatter/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/newslatter/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/newslatter/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/newslatter/count',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/newslatter/count',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/newslatter/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/newslatter/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/newslatter/update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/newslatter/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/newslatter/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/newslatter/partial-update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/newslatter/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/newslatter/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/newslatter/softdelete/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/newslatter/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/newslatter/softdeletemany',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/newslatter/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/newslatter/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/newslatter/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/newslatter/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/newslatter/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/orders/create',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/orders/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/orders/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/orders/list',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/orders/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/orders/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/orders/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/orders/aggregate',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/orders/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/orders/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/orders/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/orders/:id',
        role: 'Customer',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/orders/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/orders/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/orders/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/orders/count',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/orders/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/orders/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/orders/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/orders/update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/orders/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/orders/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/orders/partial-update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/orders/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/orders/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/orders/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/orders/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/orders/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/orders/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/orders/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/orders/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/product/list',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/product/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/product/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/aggregate',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/:id',
        role: 'Customer',
        method: 'GET'
      },
      {
        route: '/device/api/v1/product/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/product/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/product/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/product/count',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/product/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/product/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/product/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/product/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/product/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/product/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/product/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/product/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/product/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/product/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/product/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/product/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/transactions/create',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transactions/create',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transactions/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transactions/list',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transactions/list',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transactions/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transactions/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transactions/aggregate',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transactions/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transactions/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transactions/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transactions/:id',
        role: 'Customer',
        method: 'GET'
      },
      {
        route: '/device/api/v1/transactions/:id',
        role: 'User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/transactions/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/transactions/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/transactions/count',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transactions/count',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transactions/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transactions/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transactions/update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/transactions/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/transactions/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/transactions/partial-update/:id',
        role: 'Customer',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/transactions/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/transactions/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/transactions/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/transactions/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/transactions/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/transactions/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/transactions/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transactions/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/create',
        role: 'Customer',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/user/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/master/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/master/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/master/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/master/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/master/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/master/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/master/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/master/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/master/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/master/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/master/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/master/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/master/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/master/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/master/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/master/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/master/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/master/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/master/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/master/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/master/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/master/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/master/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/master/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/master/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/master/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/master/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/master/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/master/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/master/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/master/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/banner/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/banner/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/banner/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/banner/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/banner/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/banner/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/banner/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/banner/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/banner/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/banner/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/banner/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/banner/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/banner/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/banner/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/banner/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/banner/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/banner/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/banner/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/banner/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/banner/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/banner/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/banner/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/banner/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/banner/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/banner/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/banner/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/banner/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/banner/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/banner/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/banner/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/banner/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colordetails/create',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colordetails/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colordetails/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colordetails/list',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colordetails/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colordetails/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colordetails/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colordetails/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colordetails/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colordetails/:id',
        role: 'User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/colordetails/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/colordetails/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/colordetails/count',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colordetails/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colordetails/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colordetails/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colordetails/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colordetails/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colordetails/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colordetails/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colordetails/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colordetails/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colordetails/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colordetails/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colordetails/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colordetails/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colordetails/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colordetails/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/colordetails/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/colordetails/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colordetails/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/offers/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/offers/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/offers/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/offers/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/offers/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/offers/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/offers/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/offers/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/offers/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/offers/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/offers/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/offers/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/offers/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/offers/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/offers/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/offers/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/offers/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/offers/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/offers/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/offers/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/offers/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/offers/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/offers/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/offers/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/offers/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/offers/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reviews/create',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reviews/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reviews/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/reviews/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/reviews/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reviews/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reviews/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reviews/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reviews/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/reviews/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/reviews/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/reviews/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/reviews/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reviews/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reviews/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reviews/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reviews/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reviews/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reviews/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reviews/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reviews/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/reviews/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/reviews/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reviews/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/seller/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/seller/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/seller/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/seller/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/seller/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/seller/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/seller/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/seller/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/seller/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/seller/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/seller/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/seller/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/seller/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/seller/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/seller/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/seller/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/seller/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/seller/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/seller/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/seller/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/seller/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/seller/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/seller/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/seller/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/seller/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/seller/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wishlist/create',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wishlist/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wishlist/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/wishlist/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wishlist/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wishlist/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wishlist/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wishlist/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wishlist/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/wishlist/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/wishlist/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/wishlist/count',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wishlist/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wishlist/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wishlist/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wishlist/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wishlist/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wishlist/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wishlist/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wishlist/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wishlist/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wishlist/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/wishlist/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/wishlist/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/wishlist/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/wishlist/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/shortbysetting/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/shortbysetting/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/shortbysetting/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/shortbysetting/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/shortbysetting/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/shortbysetting/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/shortbysetting/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/shortbysetting/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/shortbysetting/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/shortbysetting/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/shortbysetting/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/shortbysetting/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/shortbysetting/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/shortbysetting/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/shortbysetting/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/shortbysetting/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/shortbysetting/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/shortbysetting/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/shortbysetting/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/shortbysetting/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/shortbysetting/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/shortbysetting/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/usertokens/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/usertokens/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/usertokens/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },

    ];
    if (routeRoles && routeRoles.length) {
      for (let i = 0; i < routeRoles.length; i++) {
        let route = await ProjectRoute.findOne({
          uri: routeRoles[i].route.toLowerCase(),
          method: routeRoles[i].method,
          isActive: true,
          isDeleted: false 
        }, { id: 1 });
        let role = await Role.findOne({
          code: (routeRoles[i].role).toUpperCase(),
          isActive: true,
          isDeleted: false 
        }, { id: 1 });
        if (route && route.id && role && role.id) {
          let routeRoleObj = await RouteRole.findOne({
            roleId: role.id,
            routeId: route.id,
            isActive: true, 
            isDeleted: false
          });
          if (!routeRoleObj) {
            await RouteRole.create({
              roleId: role.id,
              routeId: route.id
            });
          }
        }
      };
      console.info('RouteRole model seeded 🍺');
    }
  } catch (error){
    console.log('RouteRole seeder failed.');
  }
}
async function seedUserRole (){
  try {
    let user = await User.findOne({
      'email':'Reese.Weimann@yahoo.com',
      'isActive':true,
      'isDeleted':false
    });
    let userRole = await Role.findOne({ code: 'SYSTEM_USER' }, { id: 1 });
    if (user && user.isPasswordMatch('jAHR4y1cvX_3SIm') && userRole){
      let count = await UserRole.countDocuments({
        userId: user.id,
        roleId: userRole.id,
        isActive: true, 
        isDeleted: false
      });
      if (count == 0) {
        await UserRole.create({
          userId: user.id,
          roleId: userRole.id 
        });
        console.info('user seeded 🍺');
      }   
    }
    let admin = await User.findOne({
      'email':'Giovanni.Stark@hotmail.com',
      'isActive':true,
      'isDeleted':false
    });
    let adminRole = await Role.findOne({ code: 'SYSTEM_USER' }, { id: 1 });
    if (admin && admin.isPasswordMatch('vz9UZ2_0O26QbWy') && adminRole){
      let count = await UserRole.countDocuments({
        userId: admin.id,
        roleId: adminRole.id,
        isActive: true, 
        isDeleted: false
      });
      if (count == 0) {
        await UserRole.create({
          userId: admin.id,
          roleId: adminRole.id 
        });
        console.info('admin seeded 🍺');
      }   
    }
  } catch (error){
    console.log('UserRole seeder failed.');
  }
}
async function seedUser () {
  try {
    let user = await User.findOne({
      'email':'Reese.Weimann@yahoo.com',
      'isActive':true,
      'isDeleted':false
    });
    if (!user || !user.isPasswordMatch('jAHR4y1cvX_3SIm') ) {
      let user = new User({
        'password':'jAHR4y1cvX_3SIm',
        'email':'Reese.Weimann@yahoo.com',
        'role':authConstant.USER_ROLE.User
      });
      await User.create(user);
    }
    let admin = await User.findOne({
      'email':'Giovanni.Stark@hotmail.com',
      'isActive':true,
      'isDeleted':false
    });
    if (!admin || !admin.isPasswordMatch('vz9UZ2_0O26QbWy') ) {
      let admin = new User({
        'password':'vz9UZ2_0O26QbWy',
        'email':'Giovanni.Stark@hotmail.com',
        'role':authConstant.USER_ROLE.Admin
      });
      await User.create(admin);
    }
    console.info('Users seeded 🍺');
  } catch (error){
    console.log('User seeder failed.');
  }
}
async function seedData (allRegisterRoutes){
  await seedUser();
  await seedRole();
  await seedProjectRoutes(allRegisterRoutes);
  await seedRouteRole();
  await seedUserRole();
}     

module.exports = seedData;