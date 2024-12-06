function minCost(colors, neededTime) {
    let totalCost = 0; // To store the total time required
    let maxTime = 0;   // To track the maximum time in a group of same-colored balloons

    for (let i = 0; i < colors.length; i++) {
        // If the current and previous balloons have different colors
        if (i > 0 && colors[i] !== colors[i - 1]) {
            maxTime = 0; // Reset maxTime for a new color group
        }

        // Add the smaller time to the total cost
        totalCost += Math.min(maxTime, neededTime[i]);
        
        // Update maxTime for the current color group
        maxTime = Math.max(maxTime, neededTime[i]);
    }

    return totalCost;
}

// Example Usage
const colors = "aabaa";
const neededTime = [1, 2, 3, 4, 1];

console.log(minCost(colors, neededTime)); // Output: 3
