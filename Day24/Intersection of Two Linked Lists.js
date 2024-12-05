class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

    let pointerA = headA;
    let pointerB = headB;

    // Traverse both lists. When a pointer reaches the end of one list, move it to the beginning of the other list.
    while (pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB; // Switch to headB if pointerA reaches the end
        pointerB = pointerB ? pointerB.next : headA; // Switch to headA if pointerB reaches the end
    }

    // Either the pointers meet at the intersection, or they both become null (no intersection).
    return pointerA;
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
const common = createLinkedList([8, 4, 5]); // Shared part

const headA = new ListNode(4, new ListNode(1, common)); // List A: 4 -> 1 -> 8 -> 4 -> 5
const headB = new ListNode(5, new ListNode(0, new ListNode(1, common))); // List B: 5 -> 0 -> 1 -> 8 -> 4 -> 5

const intersection = getIntersectionNode(headA, headB);
console.log(intersection ? intersection.val : null); // Output: 8
