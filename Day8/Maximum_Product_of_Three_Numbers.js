function maximumProduct(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Calculate two potential maximum products:
    // 1. Product of the three largest numbers
    const n = nums.length;
    const option1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    
    // 2. Product of the two smallest numbers (most negative) and the largest number
    const option2 = nums[0] * nums[1] * nums[n - 1];

    // Return the maximum of the two options
    return Math.max(option1, option2);
}

// Example usage
const nums = [-10, -10, 5, 2];
const maxProduct = maximumProduct(nums);
console.log(maxProduct); // Output: 500
