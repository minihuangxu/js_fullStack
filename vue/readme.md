- props: 验证传入的 props 参数的数据规格，如果不符合数据规格，Vue 会发出警告。
- computed：用来监控自己定义的变量，该变量不在data里面声明，直接在computed里面定义，然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理；
  computed比较适合对多个变量或者对象进行处理后返回一个结果值，也就是数多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化，举例：购物车里面的商品列表和总金额之间的关系，只要商品列表里面的商品数量发生变化，或减少或增多或删除商品，总金额都应该发生变化。这里的这个总金额使用computed属性来进行计算是最好的选择

## 一些命令行
- npm install fastclick -S :下载fastclick，阻止手机端300ms的点击延迟
  原理：在点击时模拟一个click效果，再在300ms后执行判断
- npm install vue-lazyload -D: 懒加载 当图片未加载完成时放一个图片加载中上去
- npm install vuex --save:装vuex
- npm install stylus --save-dev 装stylus
- npm install stylus-loader --save-dev stylus的预处理插件
- npm install px2rem-loader --save-dev 使项目自适应不同尺寸大小的设备
- yarn add element-ui 安装element-ui

- vue自带的方法在new Vue里面声明，外来的用vue.use
- stylus中提供&选择器,&指向父选择器，用于判断父元素达到某条件时改变状态 ---写动态样式时在被选中的样式前加一个&
-  <keep-alive>标签，当你从另外一个页面回到已经浏览的页面时保持到上次浏览的位置
- import { mapGetters } from 'vuex' :接受getters里面的方法



