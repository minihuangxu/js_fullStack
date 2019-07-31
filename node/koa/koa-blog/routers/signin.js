const router = require('koa-router')();

router.get('/signin', async(ctx, next) => {
  await ctx.render('signin')
})
module.exports=router
