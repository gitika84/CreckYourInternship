class MyQueue {
    constructor() {
        this.stack1 = []; // Main stack to hold elements
        this.stack2 = []; // Auxiliary stack for reversing order
    }

    // Pushes element x to the back of the queue
    push(x) {
        this.stack1.push(x);
    }

    // Removes the element from the front of the queue and returns it
    pop() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    // Returns the element at the front of the queue
    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    // Returns true if the queue is empty, false otherwise
    empty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// Example usage
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek()); // Output: 1
console.log(queue.pop());  // Output: 1
console.log(queue.empty()); // Output: false
