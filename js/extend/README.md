Person 由prototype属性来解决它自身构造之外的原型上的属性或方法
原型对象会有它的构造函数 Person.prototype.constructor属性
第三者？  实例
实例 跟 Person 有什么关系， person.prototype 有关系

js实例跟类其实不是Java等语言的血缘关系
hx实例是怎么来的呢
new Person（）出来的
1. Person函数运行 new的方式 ，this=>new Object();
2. hx怎么拿到Person.prototype原型对象上定义的方法 __proto__ 属性
3. 方法有prototype属性，值为对象 开支
4. 任何对象都有__proto__属性指向它的原型对象
5. 原型对象上有一个额外的constructor属性指向谁是它的构造函数

原型链