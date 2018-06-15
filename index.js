const Koa = require('koa');                   //npm install koa
const bodyParser = require('koa-bodyparser'); //npm install koa-bodyparser
const cors = require('@koa/cors');            //npm install cors
const logger = require('koa-logger');         //npm install koa-logger
require('dotenv').config();                   //npm install dotenv

const errorHandler = require('./middlewares/errorHandler');
const router = require('./routes');

const app = new Koa();

app
.use(logger())
.use(cors())
.use(bodyParser())
.use(errorHandler)
.use(router.routes())
.use(router.allowedMethods());

const port = process.env.PORT || 8080;
const ip = process.env.IP || 'localhost';
app.listen(8080, () => {console.log(`Nanny-Express-server running on at http://${ip}:${port}`)})
