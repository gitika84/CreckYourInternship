function maxProfit(prices) {
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // If the price is higher than the previous day, add the difference to the profit
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }

    return maxProfit;
}

// Example usage
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 7
