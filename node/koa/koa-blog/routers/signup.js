const router = require('koa-router')();
const controller = require('../controllers/c-signup');
// router -> controller -> model|view
//render ejs
router.get('/signup', controller.getSignup);
//model save
router.post('/signup')

module.exports = router;