class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map(); // Key -> Node
        this.head = new Node(null, null); // Dummy head
        this.tail = new Node(null, null); // Dummy tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // Remove a node from the doubly linked list
    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // Add a node to the front of the doubly linked list (most recently used)
    _addToHead(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }
        const node = this.map.get(key);
        this._remove(node); // Move the accessed node to the head
        this._addToHead(node);
        return node.value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.value = value; // Update the value
            this._remove(node); // Move the updated node to the head
            this._addToHead(node);
        } else {
            if (this.map.size >= this.capacity) {
                // Evict the least recently used node
                const lru = this.tail.prev;
                this._remove(lru);
                this.map.delete(lru.key);
            }
            // Add the new key-value pair
            const newNode = new Node(key, value);
            this.map.set(key, newNode);
            this._addToHead(newNode);
        }
    }
}

// Example Usage:
const lruCache = new LRUCache(2);
lruCache.put(1, 1); // Cache: {1=1}
lruCache.put(2, 2); // Cache: {1=1, 2=2}
console.log(lruCache.get(1)); // Output: 1; Cache: {2=2, 1=1}
lruCache.put(3, 3); // Evicts key 2; Cache: {1=1, 3=3}
console.log(lruCache.get(2)); // Output: -1 (not found)
lruCache.put(4, 4); // Evicts key 1; Cache: {3=3, 4=4}
console.log(lruCache.get(1)); // Output: -1 (not found)
console.log(lruCache.get(3)); // Output: 3; Cache: {4=4, 3=3}
console.log(lruCache.get(4)); // Output: 4; Cache: {3=3, 4=4}
