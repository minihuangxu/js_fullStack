//高阶函数的考题  n
//ary 运行结果是函数
const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
const firstTwoMax = ary(Math.max, 2);
console.log([[2, 6, 'a'], [8, 6, 9], [10,9]].map(x => firstTwoMax(...x)));