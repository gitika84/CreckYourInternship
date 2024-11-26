function findMaxForm(strs, m, n) {
    // Initialize a 2D DP array with size (m+1) x (n+1)
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (const str of strs) {
        // Count the number of 0s and 1s in the current string
        const zeros = str.split('').filter(char => char === '0').length;
        const ones = str.length - zeros;

        // Update the DP array from bottom-right to top-left
        for (let i = m; i >= zeros; i--) {
            for (let j = n; j >= ones; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
            }
        }
    }

    // The answer is in dp[m][n]
    return dp[m][n];
}

// Example usage:
const strs = ["10", "0001", "111001", "1", "0"];
const m = 5;
const n = 3;
console.log(findMaxForm(strs, m, n)); // Output: 4
