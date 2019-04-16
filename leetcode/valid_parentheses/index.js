let arr = [];   //数据集合
arr.push("{");
//console.log(arr,arr.length);
//console.log(typeof arr);
arr.push("}");
//console.log(arr);
arr.pop();  //从数组尾部拿出一个元素
//console.log(arr);
arr.unshift("]");
console.log(arr);
arr.shift();
console.log("~~~~~~",arr);
arr.forEach(item => {
    console.log(item);
});

// 如何来做匹配规则
let obj = {};
obj["{"] = "}";
obj["["] = "]";
obj["("] = ")";
// "()"; sta[0]="("  ")"
let sta =["("];
let s =")";
if(obj[sta[sta.length-1]]===s){
    sta.pop();
}else{
    sta.push(s);
}
console.log(!sta.length);


// let arr1=[];
// arr1.push("{","a","b","}");
// console.log(arr1,arr1.length);
// arr1.shift("[");
// console.log(arr1);
