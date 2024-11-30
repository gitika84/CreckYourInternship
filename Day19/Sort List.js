class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function sortList(head) {
    if (!head || !head.next) return head; // Base case: empty list or single node is already sorted

    // Split the list into two halves
    let mid = getMiddle(head);
    let left = head;
    let right = mid.next;
    mid.next = null; // Break the list into two halves

    // Recursively sort each half
    left = sortList(left);
    right = sortList(right);

    // Merge the two sorted halves
    return mergeTwoLists(left, right);
}

function getMiddle(head) {
    let slow = head;
    let fast = head;

    // Use slow and fast pointers to find the middle
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;

    // Merge two sorted lists
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Add any remaining nodes
    current.next = l1 || l2;

    return dummy.next;
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

let head = createLinkedList([4, 2, 1, 3]);
let sorted = sortList(head);
printLinkedList(sorted); // Output: 1 -> 2 -> 3 -> 4

head = createLinkedList([-1, 5, 3, 4, 0]);
sorted = sortList(head);
printLinkedList(sorted); // Output: -1 -> 0 -> 3 -> 4 -> 5
