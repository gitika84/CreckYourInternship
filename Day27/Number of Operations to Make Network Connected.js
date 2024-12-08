function makeConnected(n, connections) {
    if (connections.length < n - 1) {
        // Not enough cables to connect all computers
        return -1;
    }

    // Create an adjacency list for the graph
    const adjList = Array.from({ length: n }, () => []);
    for (const [a, b] of connections) {
        adjList[a].push(b);
        adjList[b].push(a);
    }

    // Visited array to keep track of visited nodes
    const visited = new Array(n).fill(false);

    // Depth-First Search to traverse the network
    const dfs = (node) => {
        visited[node] = true;
        for (const neighbor of adjList[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    };

    let components = 0;

    // Count the number of connected components
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            components++;
            dfs(i);
        }
    }

    // The number of operations needed to connect all computers
    return components - 1;
}

// Example usage
const n = 6;
const connections = [[0, 1], [0, 2], [0, 3], [1, 4]];
console.log(makeConnected(n, connections)); // Output: 1
