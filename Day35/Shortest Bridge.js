
const shortestBridge = (grid) => {
    const n = grid.length;
    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0] 
    ];

    const isValid = (x, y) => x >= 0 && y >= 0 && x < n && y < n;

    let queue = [];


    const dfs = (x, y) => {
        if (!isValid(x, y) || grid[x][y] !== 1) return;
        grid[x][y] = -1; // Mark as visited
        queue.push([x, y]); // Add to the queue for BFS later
        for (const [dx, dy] of directions) {
            dfs(x + dx, y + dy);
        }
    };

    let found = false;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                dfs(i, j);
                found = true;
                break;
            }
        }
        if (found) break;
    }

 
    let flips = 0;
    while (queue.length > 0) {
        const newQueue = [];
        for (const [x, y] of queue) {
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                if (isValid(nx, ny)) {
                    if (grid[nx][ny] === 1) {
                        return flips; 
                    }
                    if (grid[nx][ny] === 0) {
                        grid[nx][ny] = -1; // Mark as visited
                        newQueue.push([nx, ny]);
                    }
                }
            }
        }
        queue = newQueue;
        flips++;
    }

    return -1;
};

// Example usage:
const grid = [
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 1]
];
console.log(shortestBridge(grid)); // Output: 2
