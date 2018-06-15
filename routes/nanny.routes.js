const router = require('koa-router')();

const controllers = require('../controllers/nanny.controllers');

router
  .put('/', controllers.putNanny)
  .post('/', controllers.postNanny)
  .delete('/', controllers.deleteNanny);

module.exports = router;