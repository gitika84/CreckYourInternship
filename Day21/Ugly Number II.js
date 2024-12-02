function nthUglyNumber(n) {
    const dp = new Array(n);
    dp[0] = 1; // The first ugly number is 1

    let p2 = 0, p3 = 0, p5 = 0; // Pointers for multiples of 2, 3, and 5

    for (let i = 1; i < n; i++) {
        // Calculate the next potential ugly numbers
        const next2 = dp[p2] * 2;
        const next3 = dp[p3] * 3;
        const next5 = dp[p5] * 5;

        // The next ugly number is the minimum of these
        const nextUgly = Math.min(next2, next3, next5);
        dp[i] = nextUgly;

        // Increment the pointer(s) for the chosen number
        if (nextUgly === next2) p2++;
        if (nextUgly === next3) p3++;
        if (nextUgly === next5) p5++;
    }

    return dp[n - 1];
}

// Example usage:
console.log(nthUglyNumber(10)); // Output: 12
