const Koa = require('koa');

const app = new Koa();
// 计算时间间隔
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const end = Date.now();
  const diff = end - start;
  // 响应头里面 writeHead Content-type
  ctx.set('X-Response-Time', `${diff}ms`)
  console.log(`spend ${diff}ms`)
})
// response 
app.use(async (ctx) => {
  ctx.body = 'hello Koa';
})
app.listen(3001);