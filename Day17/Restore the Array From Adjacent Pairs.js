function restoreArray(adjacentPairs) {
    const adjList = new Map();

    // Step 1: Build the adjacency list
    for (const [u, v] of adjacentPairs) {
        if (!adjList.has(u)) adjList.set(u, []);
        if (!adjList.has(v)) adjList.set(v, []);
        adjList.get(u).push(v);
        adjList.get(v).push(u);
    }

    // Step 2: Find the starting point (element with only one neighbor)
    let start;
    for (const [key, neighbors] of adjList) {
        if (neighbors.length === 1) {
            start = key;
            break;
        }
    }

    // Step 3: Reconstruct the array
    const result = [];
    const visited = new Set();
    let current = start;

    while (current !== undefined) {
        result.push(current);
        visited.add(current);

        // Move to the next unvisited neighbor
        const neighbors = adjList.get(current);
        current = neighbors.find(neighbor => !visited.has(neighbor));
    }

    return result;
}

// Example usage
const adjacentPairs = [[2, 1], [3, 4], [3, 2]];
console.log(restoreArray(adjacentPairs)); // Output: [1, 2, 3, 4] or other valid orders
