class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function isPalindrome(head) {
    if (!head || !head.next) return true; // A single node or empty list is a palindrome

    // Step 1: Find the middle of the list
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list
    let prev = null;
    while (slow) {
        const nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }

    // Step 3: Compare the first half and the reversed second half
    let firstHalf = head;
    let secondHalf = prev;

    while (secondHalf) {
        if (firstHalf.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    // Step 4: Optional (Restore the list if needed)

    return true;
}

// Example usage:
// Creating a linked list: 1 -> 2 -> 2 -> 1
let head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));

// Check if the linked list is a palindrome
console.log(isPalindrome(head)); // Output: true
