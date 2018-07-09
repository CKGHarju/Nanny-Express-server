const router = require('koa-router')();

const controllers = require('../controllers/user.controllers');

router
  .post('/', controllers.postUser)
  .put('/', controllers.putUser)

module.exports = router;
