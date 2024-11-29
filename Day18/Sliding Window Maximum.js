function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // stores indices

    for (let i = 0; i < nums.length; i++) {
        // Remove indices that are out of the bounds of the sliding window
        if (deque.length && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove indices of all elements smaller than the current element
        // as they will never be the maximum in this window
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add the current index to the deque
        deque.push(i);

        // Once the first window is processed (i >= k - 1), add the maximum to the result
        if (i >= k - 1) {
            result.push(nums[deque[0]]); // The element at deque[0] is the largest in the window
        }
    }

    return result;
}

// Example usage:
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(maxSlidingWindow(nums, k)); // Output: [3, 3, 5, 5, 6, 7]
