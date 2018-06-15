'use strict';

const router = require('koa-router')();

const userRoutes = require('./user.routes');
const nannyRoutes = require('./nanny.routes');

router
  .use('/user', userRoutes.routes())
  .use('/nanny', nannyRoutes.routes())

module.exports = router;
