function countBits(n) {
    const ans = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i & 1);
    }

    return ans;
}

// Example Usage
const n = 5; // Input
console.log("Number of 1's in binary representation from 0 to", n, ":", countBits(n));
