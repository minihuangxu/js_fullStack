var express = require('express')
var router = express.Router()
var mysql = require('mysql')

var data = {
  code: 200,
  msg: 'success'
}

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'trip'
})
// 开始请求
router.post('/', function(req, res, next) {
  let userName = req.body.userName
  let password = req.body.passWord
  // console.log(`SELECT * FROM user where userName = ${userName}`)
  // 从数据库查找数据，最后返回给前端
  pool.query(`SELECT * FROM user where userName = ${userName}`, function(err, results, fields) {
    if (err) {
      data.code = 500
      data.msg = err
    }
    console.log(results, err, '-----------------------------')
    if (results[0].passWord === password) {
      selectUser(results[0].userId)
    } else {
      data.code = 400
      data.msg = '账号或密码有误'
      res.statusCode = 200
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Content-Type', 'application/json')
      res.json(data)
    }
  })
  
  function selectUser(id) {
    pool.query(`SELECT * FROM user_info where userId = ${id}`, function (err, results, fields) {
      if (err) {
        data.code = 500
        data.msg = err
      }
      data.code = 200
      data.msg = 'success'
      data.data = results[0]
      res.statusCode = 200
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Content-Type', 'application/json')
      res.json(data)
    })
  }
})

module.exports = router
