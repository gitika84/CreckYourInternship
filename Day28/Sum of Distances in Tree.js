const sumOfDistancesInTree = (n, edges) => {
    const graph = Array.from({ length: n }, () => []);
    const answer = Array(n).fill(0);
    const subtreeSize = Array(n).fill(1);
    const distanceSum = Array(n).fill(0);

    // Build the adjacency list
    for (const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    // First DFS: Calculate `distanceSum` for root (node 0) and `subtreeSize`
    const postOrder = (node, parent) => {
        for (const neighbor of graph[node]) {
            if (neighbor === parent) continue;
            postOrder(neighbor, node);
            subtreeSize[node] += subtreeSize[neighbor];
            distanceSum[node] += distanceSum[neighbor] + subtreeSize[neighbor];
        }
    };

    // Second DFS: Calculate `answer` for all nodes using parent-child relationship
    const preOrder = (node, parent) => {
        answer[node] = distanceSum[node];
        for (const neighbor of graph[node]) {
            if (neighbor === parent) continue;

            // Recalculate `distanceSum` for the child as if it were the root
            const prevDistanceSumNode = distanceSum[node];
            const prevDistanceSumNeighbor = distanceSum[neighbor];
            const prevSubtreeSizeNode = subtreeSize[node];
            const prevSubtreeSizeNeighbor = subtreeSize[neighbor];

            distanceSum[node] -= distanceSum[neighbor] + subtreeSize[neighbor];
            subtreeSize[node] -= subtreeSize[neighbor];
            distanceSum[neighbor] += distanceSum[node] + subtreeSize[node];
            subtreeSize[neighbor] += subtreeSize[node];

            preOrder(neighbor, node);

            // Restore original values after recursion
            distanceSum[node] = prevDistanceSumNode;
            distanceSum[neighbor] = prevDistanceSumNeighbor;
            subtreeSize[node] = prevSubtreeSizeNode;
            subtreeSize[neighbor] = prevSubtreeSizeNeighbor;
        }
    };

    // Run DFS from root (node 0)
    postOrder(0, -1);
    preOrder(0, -1);

    return answer;
};

// Example Usage:
const n = 6;
const edges = [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]];
console.log(sumOfDistancesInTree(n, edges)); // Output: [8, 12, 6, 10, 10, 10]
