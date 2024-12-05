class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function getDecimalValue(head) {
    let decimalValue = 0;

    while (head !== null) {
        // Shift the current value left and add the current node's value
        decimalValue = (decimalValue << 1) | head.val;
        head = head.next;
    }

    return decimalValue;
}

// Example Usage:

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

// Example Input
const head = createLinkedList([1, 0, 1]); // Binary: 101 (5 in decimal)
console.log(getDecimalValue(head)); // Output: 5

const head2 = createLinkedList([1, 1, 0, 1]); // Binary: 1101 (13 in decimal)
console.log(getDecimalValue(head2)); // Output: 13
