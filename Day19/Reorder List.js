class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reorderList(head) {
    if (!head || !head.next || !head.next.next) return;

    // Step 1: Find the middle of the list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list
    let prev = null;
    let current = slow.next;
    slow.next = null; // Split the list into two halves
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    let secondHalf = prev;

    // Step 3: Merge the two halves
    let firstHalf = head;
    while (secondHalf) {
        let temp1 = firstHalf.next;
        let temp2 = secondHalf.next;

        firstHalf.next = secondHalf;
        secondHalf.next = temp1;

        firstHalf = temp1;
        secondHalf = temp2;
    }
}

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

// Example Usage
let head = createLinkedList([1, 2, 3, 4]);
reorderList(head);
printLinkedList(head); // Output: 1 -> 4 -> 2 -> 3

head = createLinkedList([1, 2, 3, 4, 5]);
reorderList(head);
printLinkedList(head); // Output: 1 -> 5 -> 2 -> 4 -> 3
