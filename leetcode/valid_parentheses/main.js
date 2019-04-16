/**
 * 验证字符串符号的正确性
 * 功能是 决定字符串中的符号是正确的
 * @param str 字符串， 包含() [] {}
 */

const isValid = (str) =>{
    let obj = {};
    obj["{"] = "}";
    obj["["] = "]";
    obj["("] = ")";
    let sta = [];
    //1. 空栈先入栈 
    //2. 将栈顶元素匹配消除规则规则与待入栈相比较，相同则pop栈元素
    //3. 重复
    //4. 判断数组的长度，返回bool
    for(let i=0;i<str.length;i++){
        if(!sta.length){
            sta.push(str[i]);
        }else{
            if(obj[sta[sta.length-1]]===str[i]){
                sta.pop();
            }else{
                sta.push(str[i]);
            }
        }
    }
    return !sta.length;
    console.log(sta);   
}
console.log(isValid('()'));         //true

console.log(isValid('([)'));        //false
console.log(isValid('([])'));
console.log(isValid("([)").sta.length);  