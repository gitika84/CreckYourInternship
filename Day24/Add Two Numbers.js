class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        const val1 = l1 !== null ? l1.val : 0;
        const val2 = l2 !== null ? l2.val : 0;

        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10); // Carry for the next digit
        current.next = new ListNode(sum % 10); // Add the current digit to the result
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return dummyHead.next;
}

// Example usage:

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (const num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}

// Helper function to print a linked list
function printLinkedList(head) {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
}

// Example Input
const l1 = createLinkedList([2, 4, 3]); // 342
const l2 = createLinkedList([5, 6, 4]); // 465

const result = addTwoNumbers(l1, l2); // Output should represent 807 (7 -> 0 -> 8)
printLinkedList(result); // Output: 7 -> 0 -> 8
