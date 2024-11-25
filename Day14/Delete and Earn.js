function deleteAndEarn(nums) {
    if (!nums.length) return 0;

    const maxNum = Math.max(...nums);
    const points = new Array(maxNum + 1).fill(0);

    // Populate the points array
    for (const num of nums) {
        points[num] += num;
    }

    // Use dynamic programming to calculate the maximum points
    const dp = new Array(maxNum + 1).fill(0);
    dp[1] = points[1];

    for (let i = 2; i <= maxNum; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + points[i]);
    }

    return dp[maxNum];
}

// Example Usage
const nums = [3, 4, 2];
console.log("Maximum Points:", deleteAndEarn(nums)); // Output: 6
