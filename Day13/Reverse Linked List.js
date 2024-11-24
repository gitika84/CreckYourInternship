class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseList(head) {
    let prev = null; // Previous node pointer
    let current = head; // Current node pointer

    while (current) {
        const nextNode = current.next; // Store the next node
        current.next = prev; // Reverse the current node's pointer
        prev = current; // Move prev pointer one step forward
        current = nextNode; // Move current pointer one step forward
    }

    return prev; // New head of the reversed list
}

// Example usage:
// Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

// Reversing the linked list
const reversedHead = reverseList(head);

// Printing the reversed linked list
let node = reversedHead;
while (node) {
    console.log(node.val); // Output: 5, 4, 3, 2, 1
    node = node.next;
}
