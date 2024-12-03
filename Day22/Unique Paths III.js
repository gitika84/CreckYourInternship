function uniquePathsIII(grid) {
    let startRow, startCol, emptySquares = 0;
  
    // Count empty squares and locate the starting point
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 1) {
          startRow = i;
          startCol = j;
        } else if (grid[i][j] === 0) {
          emptySquares++;
        }
      }
    }
  
    const directions = [
      [0, 1],  // Right
      [1, 0],  // Down
      [0, -1], // Left
      [-1, 0], // Up
    ];
  
    let paths = 0;
  
    const backtrack = (row, col, remaining) => {
      // Out of bounds or hitting an obstacle
      if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === -1) {
        return;
      }
  
      // If reaching the ending square
      if (grid[row][col] === 2) {
        if (remaining === -1) { // All non-obstacle squares must be visited
          paths++;
        }
        return;
      }
  
      // Mark the current square as visited
      grid[row][col] = -1;
  
      // Explore all 4 possible directions
      for (const [dx, dy] of directions) {
        backtrack(row + dx, col + dy, remaining - 1);
      }
  
      // Unmark the square (backtrack)
      grid[row][col] = 0;
    };
  
    backtrack(startRow, startCol, emptySquares);
  
    return paths;
  }
  
  // Example Usage
  const grid = [
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 2, -1],
  ];
  
  console.log(uniquePathsIII(grid)); // Output: 2
  