function findMaxValueOfEquation(points, k) {
    const deque = []; // A deque to store indices of points
    let maxValue = -Infinity;

    for (let i = 0; i < points.length; i++) {
        const [xj, yj] = points[i];

        // Remove points from the deque where |xi - xj| > k
        while (deque.length && xj - points[deque[0]][0] > k) {
            deque.shift();
        }

        // Calculate the maximum value using the front of the deque
        if (deque.length) {
            const idx = deque[0];
            const [xi, yi] = points[idx];
            maxValue = Math.max(maxValue, yi + yj + xj - xi);
        }

        // Maintain the deque in decreasing order of yi - xi
        while (deque.length && yj - xj >= points[deque[deque.length - 1]][1] - points[deque[deque.length - 1]][0]) {
            deque.pop();
        }

        // Add the current point index to the deque
        deque.push(i);
    }

    return maxValue;
}

// Example usage
const points = [[1, 3], [2, 0], [3, 10], [4, 4], [5, 2]];
const k = 2;

console.log(findMaxValueOfEquation(points, k)); // Output: 14
