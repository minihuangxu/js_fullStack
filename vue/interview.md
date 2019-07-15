## 1. vue渲染模板时怎么保留模板中的HTML注释呢？      
```            
<template comments>
  ...
</template>  
```
## 2. Vue.observable你有了解过吗？           
用于设置监控属性，这样就可以监控viewModule中的属性值的变化，从而就可以动态的改变某个元素中的值，监控属性的类型不变量而是一个函数，通过返回一个函数给viewModule对象中的属性，从而来监控该属性。
## 3. 你知道style加scoped属性的用途和原理吗？             
**用途：** 实现组件的私有化，不对全局造成样式污染，表示当前style属性只属于当前模块               
**原理：** vue通过在DOM结构以及css样式上加上唯一的标记，保证唯一，达到样式私有化。
## 4. vue边界情况有哪些？

