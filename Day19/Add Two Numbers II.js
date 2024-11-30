class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    // Helper function to reverse a linked list
    function reverseList(head) {
        let prev = null;
        let current = head;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }

    // Reverse both lists
    l1 = reverseList(l1);
    l2 = reverseList(l2);

    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    // Add the two numbers
    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);

        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    // Reverse the result list
    return reverseList(dummy.next);
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
let l1 = createLinkedList([7, 2, 4, 3]); // Represents 7243
let l2 = createLinkedList([5, 6, 4]);    // Represents 564
let result = addTwoNumbers(l1, l2);       // Result: 7807
printLinkedList(result); // Output: 7 -> 8 -> 0 -> 7
