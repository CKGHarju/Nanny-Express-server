const router = require('koa-router')();

const controllers = require('../controllers/nanny.controllers');

router
  .get('/', nannyController.getNanny())
  .post('/', nannyController.postNanny())
  .put('/', nannyController.putNanny())
  .delete('/', nannyController.deleteNanny())

  module.exports = router;
