function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    const dfs = (row, col) => {
        // Base case: if out of bounds or at a water cell, stop the recursion
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === '0') return;

        // Mark the cell as visited by changing '1' to '0'
        grid[row][col] = '0';

        // Visit all adjacent cells (up, down, left, right)
        dfs(row - 1, col); // up
        dfs(row + 1, col); // down
        dfs(row, col - 1); // left
        dfs(row, col + 1); // right
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                // Found a new island
                islandCount++;
                dfs(i, j); // Explore the entire island
            }
        }
    }

    return islandCount;
}

// Example usage
const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];

console.log(numIslands(grid)); // Output: 3
