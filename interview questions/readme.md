## Q1. js全局执行上下文为我们创建了两个东西：全局对象和this关键字
### new 的实现原理：        
1. 创建一个空对象，构造函数的this指向这个空对象
2. 这个新对象被执行【原型】连接
3. 执行构造函数，将属性或方法添加到this引用的对象上
4. 如果构造函数中没有返回其他对象，那么返回this，即创建的新对象。否则，返回构造函数返回的对象        
## Q2. call, bind, apply            
1. b.call(a)就相当于把b里面的作用域强行指到a里面去,第一个参数一定是this作用域要去到的地方，第二三四个参数是该作用域里用到的值
2. b.apply(a)用法与call大致相同，不同的是apply需要用数组类型来传递用到的值
3. b.call() || b.apply(), 此时this的作用域会指向window
4. c = b.bind(a)          
   c()         
   bind方法返回的是一个修改过的函数，所以该用函数该有的姿态去调用            
   bind方法接受的参数是按照形参的顺序进行的              
## Q3.浅拷贝和深拷贝                
1. **数组解构**       
let [x, y] = [1, 2]          
//x = 1, y = 2        
2. **对象解构**                
let {foo, bar } = {foo:"aaa", bar:"bbb"}             
//foo = aaa        
//bar = bbb           
另：（对象解构允许给赋值的变量重命名）               
let {foo:baz} = {foo:"abc"}             
//baz = "abc"           
3. **浅拷贝**            
浅拷贝只是第一层属性进行拷贝，当第一层的属性为**基本数据类型**时，新对象与原对象互不影响，但是如果第一层的属性值是**复杂数据类型**，那么新对象和原对象的属性值其指向的是同一块内存地址
4. **深拷贝**           
深拷贝是将对象及其值复制过来，两个对象修改其中任意一个的值另外一个不会改变
## Q4.闭包
闭包是指有权限访问另一个函数作用域中的变量的函数
1. 能够访问函数定义是所在的语法作用域（阻止其被回收）
2. 私有化变量
3. 模拟块级作用域
## Q5.数组去重
**Set**             
**indexOf**             
**includes**              
**map**              
**reduce**
## Q6.防抖节流函数原理
```
function debounce(fn, time) {
      let previous = 0, timer = null;
      //将debounce处理结果当作函数返回
      return function (...args) {
        // 获取当前时间，转换成时间戳， 单位ms
        let now = +new Date()

        // 判断上次触发的时间和本次触发的时间差是否小于时间间隔
        if (now - previous < time) {
          //如果小于，则本次触发设立一个新的定时器
          //定时器时间借结束后，执行fn
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            previous = now
            fn.apply(this, args)
          }, time)
        } else {
          // 第一次执行或者时间间隔超出设定的时间间隔，执行fn
          previous = now
          fn.apply(this, args)
        }
      }
    }
```
## Q7. __proto__和prototype关联          
-   __ proto__ 是每一个实例都有的属性，可以访问[prototype]属性，实例的__proto__与其构造函数的prototype指向的是同一个对象




  