const router = require('koa-router')();

const controllers = require('../controllers/user.controllers');

router.
  .get('/', userController.getUser())
  .post('/', userController.postUser())
  .put('/', userController.putUser())
  .delete('/', userController.deleteUser())

  module.exports = router;
