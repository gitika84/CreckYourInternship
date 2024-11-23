function climbStairs(n) {
    if (n === 1) return 1; // Only 1 way to climb 1 step

    let prev1 = 1; // Ways to climb to the (n-1)-th step
    let prev2 = 2; // Ways to climb to the (n-2)-th step

    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2; // Ways to climb to the current step
        prev1 = prev2; // Shift prev1 to prev2
        prev2 = current; // Update prev2 to current
    }

    return prev2;
}

// Example Usage:
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(5)); // Output: 8
