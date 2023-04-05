
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    const dummyHead = new ListNode();
    let currentNode = dummyHead;
    let carryOver = 0;

    while (l1 || l2) {
        const x = l1?.val ?? 0;
        const y = l2?.val ?? 0;
        let currentSum = carryOver + x + y;

        carryOver = Math.floor(currentSum / 10);
        currentNode.next = new ListNode(currentSum % 10);
        currentNode = currentNode.next;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

     if (carryOver) {
        currentNode.next = new ListNode(carryOver)
     }   

    return dummyHead.next;

}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
const result = addTwoNumbers(l1, l2);

console.log(result)
