//1. userObj 一个参数带来了新的问题， 代码的函数编写者 user 里面的key 要去了解 只需要用一部分 解构可以帮助 提高代码的可读性
function information({name, age, height}) {
    console.log(name, age, height)
}

const user = {
    name: '杨幂',
    age: 33,
    height: 1.68,
    sex: '女',
    hobbies: ['动漫']
}
console.log(information(user))