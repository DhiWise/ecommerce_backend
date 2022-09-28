const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path:'.env' });
global.__basedir = __dirname;
const ejs = require('ejs');
const postmanToOpenApi = require('postman-to-openapi');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
require('./config/db.js');
const listEndpoints = require('express-list-endpoints');
const passport = require('passport');

let cookieParser = require('cookie-parser');
let logger = require('morgan');
const { adminPassportStrategy } = require('./config/adminPassportStrategy');
const { devicePassportStrategy } = require('./config/devicePassportStrategy');
const app = express();
const corsOptions = { origin: process.env.ALLOW_ORIGIN, };
app.use(cors(corsOptions));

//template engine
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));
app.use(require('./utils/responseHandler'));

//all routes 
const routes =  require('./routes/index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

adminPassportStrategy(passport);
devicePassportStrategy(passport);

//swagger Documentation
postmanToOpenApi('postman/postman-collection.json', path.join('postman/swagger.yml'), { defaultTag: 'General' }).then(data => {
  let result = YAML.load('postman/swagger.yml');
  result.servers[0].url = '/';
  app.use('/', swaggerUi.serve, swaggerUi.setup(result));
}).catch(e=>{
  console.log('Swagger Generation stopped due to some error');
});

let currentFile = __filename;

// if (process.argv[2] == currentFile || process.argv[2] == currentFile.slice(0, -3) ) {

const seeder = require('./seeders');
const allRegisterRoutes = listEndpoints(app);
seeder(allRegisterRoutes).then(()=>{console.log('Seeding done.');});
app.listen(process.env.PORT,()=>{
  console.log(`your application is running on ${process.env.PORT}`);
});
/*
 * } else {
 *   module.exports = app;
 * }
 */
