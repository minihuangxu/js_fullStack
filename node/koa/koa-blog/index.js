const Koa = require('koa');
const path = require('path')
const bodyParser = require('koa-bodyparser');
const ejs = require('ejs');
const config = require('./config/default.js');
const router = require('koa-router')

const views = require('koa-views')
// const koaStatic = require('koa-static')
const staticCache = require('koa-static-cache')
const app = new Koa()
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
app.use(bodyParser({
  formLimit: '1mb'
})) 

app.use(require('./routers/signin.js').routes())

app.use(require('./routers/signup.js').routes())

app.listen(config.port)

console.log(`listening on port ${config.port}`)
