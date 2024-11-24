function largestRectangleArea(heights) {
    const stack = []; // Stack to store indices of heights in increasing order
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
        const currentHeight = i < heights.length ? heights[i] : 0;

        // Process heights that are taller than the current height
        while (stack.length && heights[stack[stack.length - 1]] > currentHeight) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        // Push the current index onto the stack
        stack.push(i);
    }

    return maxArea;
}

// Example usage
const heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights)); // Output: 10
