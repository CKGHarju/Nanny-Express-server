'use strict';

const router = require('koa-router')();

const userRoutes = require('./user.routes');

router
  .use('/user', userRoutes.routes())

module.exports = router;
