## async
async 函数就是 Generator 函数的语法糖

## generate 函数
```js
function* test() {
      let a = yield 1;
      console.log(a);
      let b = yield 2;
      console.log(b);
      let c = yield 3;
      console.log(c);
    }
    // 惰性的 每next一次 执行两行
    var g = test();
```
通过 g.next() 一步一步调用
每一步调用 执行到 yield 关键词
通过传参 作为上一个 yield 语句的返回值

## 
{
  test: /\.js$/
  use: ['babel-loader']
}
.babelrc
