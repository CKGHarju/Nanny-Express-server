const router = require('koa-router')();

const controllers = require('../controllers/user.controllers');

router
  .get('/', controllers.getUser)
  .post('/', controllers.postUser)
  .put('/', controllers.putUser)
  .delete('/', controllers.deleteUser)

  module.exports = router;
