const router = require('koa-router')();

const controllers = require('../controllers/nannies.controllers');

router
  .put('/', controllers.putNannies);

module.exports = router;
