function swimInWater(grid) {
    const n = grid.length;

    // Directions for moving in 4 directions (up, down, left, right)
    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ];

    // Helper function to check if we can reach the bottom-right with a given time limit
    const canSwim = (time) => {
        const visited = Array.from({ length: n }, () => Array(n).fill(false));
        const queue = [[0, 0]]; // Start from top-left

        visited[0][0] = true;

        while (queue.length) {
            const [x, y] = queue.shift();

            if (x === n - 1 && y === n - 1) {
                return true; // Reached bottom-right
            }

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (
                    nx >= 0 &&
                    ny >= 0 &&
                    nx < n &&
                    ny < n &&
                    !visited[nx][ny] &&
                    grid[nx][ny] <= time
                ) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }

        return false; // Unable to reach bottom-right
    };

    // Binary search over the time
    let left = grid[0][0], right = n * n - 1, result = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (canSwim(mid)) {
            result = mid; // Update result and try for a smaller time
            right = mid - 1;
        } else {
            left = mid + 1; // Try for a larger time
        }
    }

    return result;
}

// Example usage:
const grid = [
    [0, 2],
    [1, 3]
];
console.log(swimInWater(grid)); // Output: 3
