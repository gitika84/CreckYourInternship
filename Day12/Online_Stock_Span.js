class StockSpanner {
    constructor() {
        this.stack = []; // Stack to store pairs of [price, span]
    }

    next(price) {
        let span = 1;

        // Compare with elements in the stack
        while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
            span += this.stack.pop()[1]; // Accumulate the span of consecutive days
        }

        // Push the current price and its span to the stack
        this.stack.push([price, span]);

        return span;
    }
}

// Example Usage:
const spanner = new StockSpanner();
console.log(spanner.next(7));  // Output: 1
console.log(spanner.next(2));  // Output: 1
console.log(spanner.next(1));  // Output: 1
console.log(spanner.next(2));  // Output: 2
console.log(spanner.next(8));  // Output: 4
