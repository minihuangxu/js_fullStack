//线性表
function LinkNode(val) {
    this.val = val;
    this.next = null;
}

function addTwoNumbers(l1, l2) {
    
}

console.log(addTwoNumbers(a1, b1))
//529
let a1 = new LinkNode(5);  //head结点
console.log(a1);
let a2 = new LinkNode(2);
let a3 = new LinkNode(9);  //尾结点
a1.next = a2;
a2.next = a3;

let b1 = new LinkNode(9);
let b2 = new LinkNode(3);
b1.next = b2;


let  node = a1; //表头
while (node) {
    console.log(node.val)
    node = node.next
}