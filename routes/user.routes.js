const router = require('koa-router')();

const controllers = require('../controllers/user.controllers');

router
  .get('/', controllers.getUser)
  .post('/', controllers.postUser)
  
module.exports = router;
