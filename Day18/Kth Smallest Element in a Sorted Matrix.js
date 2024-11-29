function kthSmallest(matrix, k) {
    const n = matrix.length;

    // Helper function to count numbers ≤ mid
    const countLessEqual = (mid) => {
        let count = 0;
        let row = n - 1; // Start from bottom-left
        let col = 0;

        while (row >= 0 && col < n) {
            if (matrix[row][col] <= mid) {
                count += row + 1; // Add all elements in the column up to this row
                col++; // Move to the next column
            } else {
                row--; // Move up in the same column
            }
        }

        return count;
    };

    // Binary search on the range of values
    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];
    let result = left;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const count = countLessEqual(mid);

        if (count >= k) {
            result = mid; // Potential candidate
            right = mid - 1; // Look for smaller candidates
        } else {
            left = mid + 1; // Look for larger candidates
        }
    }

    return result;
}

// Example usage:
const matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]
];
const k = 8;
console.log(kthSmallest(matrix, k)); // Output: 13
