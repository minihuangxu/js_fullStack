数组 字符串 布尔值 null undefined
其他都是 Object     Array 看遍历的对象 for()
JSON Object  对象字面量 可枚举的对象
function 也是对象
arr.push() 
document.querySelectAll('a);    类数组
- 字符串是字符的数组
   .length str[0]
- 运算符匹配的问题时，选择数组做为数据结构
    只在顶部做操作  (push pop)  栈Stack
    算法+数据结构   "()"
    1. sta =[]  空
    2. ( sta.push("(") 入栈    sta.length=1    sta[0]="("    )
    栈不为空    跟顶部元素进行比较，如果是一对，顶部的元素pop()
    3. sta 为空 true |  false