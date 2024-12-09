const numTrees = (n) => {
    // DP array to store the number of unique BSTs for each count of nodes
    const dp = new Array(n + 1).fill(0);

    // Base cases
    dp[0] = 1; // Empty tree
    dp[1] = 1; // Single-node tree

    // Fill dp array for all numbers from 2 to n
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }

    return dp[n];
};

// Example usage:
console.log(numTrees(3)); // Output: 5
console.log(numTrees(4)); // Output: 14
