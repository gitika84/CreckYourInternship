class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function deleteDuplicates(head) {
    let current = head;
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next; // Skip the duplicate
        } else {
            current = current.next; // Move to the next node
        }
    }
    return head;
}

// Example Usage:
// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print the linked list
function printLinkedList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
}

let head = createLinkedList([1, 1, 2, 3, 3]);
printLinkedList(deleteDuplicates(head)); // Output: 1 -> 2 -> 3
