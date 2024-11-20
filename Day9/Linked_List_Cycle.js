function hasCycle(head) {
    if (!head || !head.next) return false;

    let slow = head; // The "tortoise" pointer
    let fast = head; // The "hare" pointer

    while (fast && fast.next) {
        slow = slow.next; // Move slow by one step
        fast = fast.next.next; // Move fast by two steps

        if (slow === fast) {
            // If slow and fast meet, there's a cycle
            return true;
        }
    }

    return false; // If fast reaches the end, there's no cycle
}

// Example usage:
// Define a linked list with a cycle for testing
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Create nodes
let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

// Connect nodes to form a cycle
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Cycle here

console.log(hasCycle(node1)); // Output: true

// Create a linked list with no cycle
let nodeA = new ListNode(1);
let nodeB = new ListNode(2);
nodeA.next = nodeB;

console.log(hasCycle(nodeA)); // Output: false
