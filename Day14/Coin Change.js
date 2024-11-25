function coinChange(coins, amount) {
    // Initialize dp array with Infinity and set dp[0] to 0
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    // Fill the dp array
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    // Return the result
    return dp[amount] === Infinity ? -1 : dp[amount];
}

// Example Usage
const coins = [1, 2, 5];
const amount = 11;
console.log("Fewest Number of Coins:", coinChange(coins, amount)); // Output: 3 (5 + 5 + 1)
