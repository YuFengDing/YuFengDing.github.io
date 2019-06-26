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