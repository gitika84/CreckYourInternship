function floodFill(image, sr, sc, color) {
    const originalColor = image[sr][sc];
    
    // If the color to be filled is the same as the original color, no need to proceed
    if (originalColor === color) return image;

    const rows = image.length;
    const cols = image[0].length;

    const dfs = (row, col) => {
        // Base case: If out of bounds or the pixel is not the original color, stop
        if (row < 0 || col < 0 || row >= rows || col >= cols || image[row][col] !== originalColor) return;

        // Change the color of the current pixel
        image[row][col] = color;

        // Perform DFS for all four directions
        dfs(row - 1, col); // up
        dfs(row + 1, col); // down
        dfs(row, col - 1); // left
        dfs(row, col + 1); // right
    };

    // Start the flood fill
    dfs(sr, sc);

    return image;
}

// Example usage
const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
];

const sr = 1, sc = 1, color = 2;
console.log(floodFill(image, sr, sc, color));
// Output:
// [
//   [2, 2, 2],
//   [2, 2, 0],
//   [2, 0, 1]
// ]
