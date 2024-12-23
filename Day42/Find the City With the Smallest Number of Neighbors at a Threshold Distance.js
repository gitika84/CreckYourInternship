var findTheCity = function (n, edges, distanceThreshold) {

    const matrix = []
    for (let i = 0; i < n; i++) {
        matrix[i] = []
        for (let j = 0; j < n; j++) {
            if (i === j) {
                matrix[i][j] = 0;
                continue;
            }
            matrix[i][j] = Infinity
        }
    }
    for (const [a, b, w] of edges) {
        matrix[a][b] = w;
        matrix[b][a] = w;
    };

    // Floyd Warshall algorithm => All pairs shortest path
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][k] === Infinity || matrix[k][j] === Infinity) continue;
                const connectedDistance = matrix[i][k] + matrix[k][j]
                if (connectedDistance < matrix[i][j]) matrix[i][j] = connectedDistance;
            }
        }
    }

    let minCount = Infinity;
    let index;
    for (let i = 0; i < matrix.length; i++) {
        const currentCount = matrix[i].filter((e, j) => e <= distanceThreshold && i !== j).length
        if (currentCount <= minCount) {
            minCount = currentCount;
            index = i
        }
    }
    return index
};