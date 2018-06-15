const Router = require('koa-router');
const router = new Router();

router.get('/', () => {console.log('Hello Nannies! :) Want a banana?')})
// router
// .get('/user', userController.getUser())
// .post('/user', userController.postUser())
// .put('/user', userController.putUser())
// .delete('/user', userController.deleteUser())
// .get('/nannie', nannieController.getUser())
// .post('/nannie', nannieController.postUser())
// .put('/nannie', nannieController.putUser())
// .delete('/nannie', nannieController.deleteUser())
module.exports = router;

