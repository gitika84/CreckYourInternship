class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(list1, list2) {
    // Create a dummy node to simplify merging logic
    const dummy = new ListNode();
    let current = dummy;

    // Traverse both lists while they are not empty
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Append the remaining nodes from either list1 or list2
    current.next = list1 || list2;

    // Return the merged list starting from the next of dummy node
    return dummy.next;
}

// Example usage:
// Creating two sorted linked lists:
// list1: 1 -> 2 -> 4
// list2: 1 -> 3 -> 4
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// Merging the two lists
const mergedHead = mergeTwoLists(list1, list2);

// Printing the merged list
let current = mergedHead;
while (current) {
    console.log(current.val); // Output: 1, 1, 2, 3, 4, 4
    current = current.next;
}
