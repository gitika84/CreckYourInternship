function numDistinct(s, t) {
    const m = s.length;
    const n = t.length;

    // Create a DP table with (m+1) x (n+1) dimensions
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    // Base case: dp[i][0] = 1 for all i (empty string t can match any prefix of s)
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[m][n];
}

// Example Usage
const s = "rabbbit";
const t = "rabbit";
console.log(numDistinct(s, t)); // Output: 3
