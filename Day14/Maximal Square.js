function maximalSquare(matrix) {
    if (!matrix.length || !matrix[0].length) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxSide = 0;

    // Create a DP array initialized to 0
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    // Base case: first row or first column
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = Math.min(
                        dp[i - 1][j],      // Top
                        dp[i][j - 1],      // Left
                        dp[i - 1][j - 1]   // Top-left diagonal
                    ) + 1;
                }
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }

    // The area of the largest square
    return maxSide * maxSide;
}

// Example Usage
const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
];
console.log("Largest Square Area:", maximalSquare(matrix)); // Output: 4
