function eventualSafeNodes(graph) {
    const n = graph.length;
    const safe = new Array(n).fill(-1);  // -1: not visited, 0: unsafe, 1: safe
    
    const dfs = (node) => {
        if (safe[node] !== -1) return safe[node];  // Return the result if already computed
        
        safe[node] = 0;  // Mark the node as unsafe initially
        
        for (const neighbor of graph[node]) {
            if (dfs(neighbor) === 0) {  // If the neighbor is unsafe
                return safe[node] = 0;  // Mark the current node as unsafe
            }
        }
        
        return safe[node] = 1;  // If no unsafe neighbor, mark as safe
    };
    
    // Run DFS for each node
    for (let i = 0; i < n; i++) {
        if (safe[i] === -1) {
            dfs(i);
        }
    }
    
    // Collect all safe nodes
    const result = [];
    for (let i = 0; i < n; i++) {
        if (safe[i] === 1) {
            result.push(i);
        }
    }
    
    return result;
}

// Example usage
const graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
console.log(eventualSafeNodes(graph));  // Output: [2, 4, 5, 6]
