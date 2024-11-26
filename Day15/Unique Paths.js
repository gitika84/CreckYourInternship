function uniquePaths(m, n) {
    // Initialize a 2D array with dimensions m x n
    const dp = Array.from({ length: m }, () => Array(n).fill(1));

    // Fill the DP table
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    // Return the bottom-right corner value
    return dp[m - 1][n - 1];
}

// Example usage:
console.log(uniquePaths(3, 7)); // Output: 28
