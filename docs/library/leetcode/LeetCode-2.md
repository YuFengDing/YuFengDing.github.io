# add two numbers
leetCode 第二题 第一次做时的解法,挺垃圾的解法后面会更新。
![leetCode-2](/addTwoNumbers.png)
```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let list1 = [],list2 = [],list3 = [];
    list1.push(l1.val)
    while(l1.next !== null){
        l1 = l1.next;
        list1.push(l1.val)
    }
    list2.push(l2.val)
    while(l2.next !== null){
        l2 = l2.next;
        list2.push(l2.val)
    }
    const l = list1.length >= list2.length ? list1.length:list2.length;
    let temp = 0;
    for(let i = 0;i<l;i++){
        const ls1 = list1[i] === undefined?0:list1[i];
        const ls2 = list2[i] === undefined?0:list2[i];
        list3[i] = ((ls1 + ls2)%10 + temp) % 10;
        temp = Math.floor((ls1 + ls2 + temp) / 10);
    }
    if(temp > 0){
       list3.push(temp)
    };
    let node = null;
    let head = new ListNode(list3[0]);
    let pNode = head;
    for(let j = 1;j < list3.length;j++){
        node = new ListNode(list3[j]);
        pNode.next = node;
        pNode = node;
    }
    return head
};
```
直接用链表来接(需要对链表以及js中的引用类型有深刻理解)
```
var addTwoNumbers = function(l1, l2) {
let node1 = l1;
let node2 = l2;
// 进位 默认0
let temp = 0;
let initNode = new ListNode();
let parentNode = null;
initNode.val = (node1.val + node2.val + temp) % 10;
temp = Math.floor((node1.val + node2.val + temp) / 10);
if(node1.next !== null || node2.next !== null || (temp > 0)){
    initNode.next = new ListNode();
    if(temp > 0){
       initNode.next = new ListNode(temp) 
    }
}
parentNode = initNode.next;
while (node1 && (node1.next !== null) || node2 && (node2.next !== null)) {
  node1 = node1 && node1.next;
  node2 = node2 && node2.next;
  const node1Val = (node1 === null ? 0 : node1.val);
  const node2Val = (node2 === null ? 0 : node2.val);
  parentNode.val = (node1Val + node2Val + temp) % 10;
  temp = Math.floor((node1Val + node2Val + temp) / 10);
  if((node1 && (node1.next !== null)) || (node2 && (node2.next !== null)) ||(temp > 0)){
     parentNode.next = new ListNode();
      if(temp > 0 ){
        parentNode.next = new ListNode(temp);
      }
  }
  parentNode = parentNode.next;
}
return initNode;
};
```
跑个分
![leetcode-2](/addTwoNumbers2.png)
