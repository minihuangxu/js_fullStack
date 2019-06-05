## why
http 无状态的
客户端 服务器 再次请求的时候 知道客户端是谁

## -S
--save
放 “dependencies”：{}
npm i
在 json 文件里面寻找各个依赖并安装
本地开发 安装的 node_module
服务器上面 只需要写的代码 不需要上传

## cookie
存在客户端
js 操作：
document.cookie

后端： 响应头
Set-Cookie： name1 = value1； path=/； httponly

浏览器检查所有存储的 cookie ，把符合当前作用范围的 cookie 放在 http 请求头发给服务器
cookie 有可能被用户禁用

内容：
name：
value：
path：规定 cookie 生效的路径
/  所有的路径
/user  /user 以及 /user/xxx
/user/xxx  /user/xxx 以及下面的 /user/xxx/xx
httpOnly: true / false, true 就不能通过 js 获取 cookie
max-age: 在几秒 过后过期

作用范围：
path
domain
用途： 会话状态管理，保存用户的个性化设置

## session
保存在服务端的
靠后台语言实现
有很多个 session
很多个用户 sessionID

## koa 第三方中间件
ctx req + res
ctx : {
  req,
  res,
  render: () => {}
}
调用 提供的 redner()
koa-views  ejs
往 ctx 上面扩展  80%
## localStorage sessionStorage cookie session