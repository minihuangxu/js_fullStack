//会计  年终奖  
//绩效 S 5 | A 3 | B 2 | C 1 | D
//如何优化？ 分支太多 计算策略太简陋
//一个个策略函数
var perfomanceS = function(salary) {
    return salary * 5;
}
var perfomanceA = function(salary) {
    return salary * 3;
}
var perfomanceB = function(salary) {
    return salary * 2;
}
var perfomanceC = function(salary) {
    return salary * 1;
}
var perfomanceX = function(salary) {
    return salary * 100;
}
var calculateBounce = function(perfomanceLevel,salary) {
    switch(perfomanceLevel){
        case 'X':return perfomanceX(salary);break;
        case 'S':return perfomanceS(salary);break;
        case 'A':return perfomanceA(salary);break;
        case 'B':return perfomanceB(salary);break;
        case 'C':return perfomanceC(salary);break;
        default:return 0;
    }
}
console.log(calculateBounce('X',20000))