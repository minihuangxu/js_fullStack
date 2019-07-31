// 引入资源文件
var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var looger = require('morgan')

// 引入index.js路由配置文件
var indexRouter = require('./routers/index')
// 引入user.js路由配置文件
var userRouter = require('./routers/user')

var app = express()  // 用express创建一个应用

app.set('views', path.join(__dirname, 'views'))  //指定视图文件夹views
app.set('view engine', 'pug')  //指定视图引擎pug

//使用刚刚加载的资源
app.use(looger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser()) //使用cookie
app.use(express.static(path.join(__dirname, 'public')))  //指定公共资源文件夹为public

app.use('/', indexRouter)  //当路径为'/', 也就是'http:localhost:3000', 匹配index.js
app.use('/user', userRouter)  //当路径为'/user', 也就是'http:localhost:3000/user', 匹配user.js

//匹配404， 即路由未匹配时
app.use(function(req, res, next) {
  next(createError(404))
})

//当路径匹配错误时
app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  //页面渲染错误时
  res.status(err.status || 500)
  res.render('error')
})
console.log('跑起来了')
module.exports = app