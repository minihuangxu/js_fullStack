var strategies = {
    "S":function(salary) {
        return salary * 5;
    },
    "A":function(salary) {
        return salary * 3;
    },
    "B":function(salary) {
        return salary * 2;
    }
}
var calculateBounce = function(level,salary) {
    return strategies[level](salary);
}
console.log(calculateBounce('S',10000))