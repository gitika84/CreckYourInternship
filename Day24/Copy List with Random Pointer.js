class Node {
    constructor(val = 0, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

function copyRandomList(head) {
    if (!head) return null;

    const map = new Map(); // Map to hold original nodes as keys and their copies as values

    // Step 1: Create all nodes in the copied list and store them in the map
    let current = head;
    while (current !== null) {
        map.set(current, new Node(current.val));
        current = current.next;
    }

    // Step 2: Assign next and random pointers for each copied node
    current = head;
    while (current !== null) {
        const copy = map.get(current);
        copy.next = current.next ? map.get(current.next) : null;
        copy.random = current.random ? map.get(current.random) : null;
        current = current.next;
    }

    // Return the head of the copied list
    return map.get(head);
}

// Example Usage:

// Helper function to create a linked list with random pointers from an array
function createLinkedList(arr) {
    const nodes = arr.map(([val]) => new Node(val));
    for (let i = 0; i < arr.length; i++) {
        const [, randomIndex] = arr[i];
        if (i < arr.length - 1) nodes[i].next = nodes[i + 1];
        if (randomIndex !== null) nodes[i].random = nodes[randomIndex];
    }
    return nodes[0];
}

// Helper function to print a linked list with random pointers
function printLinkedList(head) {
    const result = [];
    const map = new Map();
    let index = 0;
    let current = head;
    while (current) {
        map.set(current, index++);
        current = current.next;
    }
    current = head;
    while (current) {
        result.push([
            current.val,
            current.random ? map.get(current.random) : null,
        ]);
        current = current.next;
    }
    console.log(result);
}

// Example Input
const head = createLinkedList([
    [7, null],
    [13, 0],
    [11, 4],
    [10, 2],
    [1, 0],
]);

// Deep Copy
const copiedHead = copyRandomList(head);

// Print Original and Copied Lists
console.log("Original List:");
printLinkedList(head);
console.log("Copied List:");
printLinkedList(copiedHead);
