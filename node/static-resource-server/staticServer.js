const http = require('http');
const fs = require('fs');
const path = require('path');
// 浏览器转圈 说明没有响应
// localhost:8080/static/ [index.html(可有可无)]
http.createServer((req, res) => {
  // console.log(req.url);
  // /static/index.html -> 
  // /static/xxx.png ->
  const url = req.url;
  // ^
  if (/^\/static\//.test(url)) {
    staticServer(req, res);
    return false;
  }
  // 
  
})
.listen(8080, () => {
  console.log('server is running 8080');
})
function staticServer(req, res) {
  let url = req.url;
  console.log('url', url);
  if (url === '/static/') url += 'index.html';
  const filePath = path.join(__dirname, url)
  fs.exists(filePath, exists => {
    if (!exists) {
      res.end(`the request url : ${url} is not found`)
    } else {
      fs.readFile(filePath, 'binary', (err, file) => {
        if (!err) {
          res.write(file, 'binary');
          res.end();
        }
      })
    }
  })
}