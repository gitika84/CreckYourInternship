function removeKdigits(num, k) {
    const stack = [];
    let toRemove = k;

    for (const digit of num) {
        // Maintain a monotonically increasing stack
        while (toRemove > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            toRemove--;
        }
        stack.push(digit);
    }

    // Remove remaining digits if needed
    while (toRemove > 0) {
        stack.pop();
        toRemove--;
    }

    // Build the result and remove leading zeros
    const result = stack.join('').replace(/^0+/, '');

    // Return the result or "0" if empty
    return result === '' ? '0' : result;
}

// Example usage
const num = "1432219";
const k = 3;
console.log(removeKdigits(num, k)); // Output: "1219"
