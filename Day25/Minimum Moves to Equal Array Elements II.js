function minMoves2(nums) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);

    // Step 2: Find the median
    const median = nums[Math.floor(nums.length / 2)];

    // Step 3: Calculate the total moves required
    let totalMoves = 0;
    for (const num of nums) {
        totalMoves += Math.abs(num - median);
    }

    return totalMoves;
}

// Example Usage
const nums1 = [1, 2, 3];
console.log(minMoves2(nums1)); // Output: 2

const nums2 = [1, 10, 2, 9];
console.log(minMoves2(nums2)); // Output: 16
