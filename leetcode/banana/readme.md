蜗牛爱吃香蕉

N piles bananas 每pile bananas 有不同数量的bananas

[3,6,7,11]
[30,11,23,4,20]
每个小时可以吃某一pile 里的n只香蕉， 规定H小时内一定要吃完，吃每把的时候，要不就是吃 m只，要不就吃剩下的

koko bananas
- 把香蕉吃完函数 canEatAllBananas
h 来自于吃法规则 一小时mid ，一次只吃一把 return h >= H;
- while 去疯狂的试
1，2，3，4，5，6,...... Math.max(...piles)
能拿到结果， 但是太慢了
最大的来吗？
取中间值 最大概率也是最快的， 二分查找
二分查找优化查找的效果

简单查找 时间开销是n
二分查找的写法有规律
x y 要找的是最小可以的min 可以来优化的找中间 mid = x +((y-x) >>1)， 小了，
mid + 1 新的x
大了mid - 1新的y
log2N