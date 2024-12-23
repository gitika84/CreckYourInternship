
var calcEquation = function(equations, values, queries) {
    const adjList = new Map();
    
    // Initialize the graph
    for (let i = 0; i < equations.length; i++) {
        adjList.set(equations[i][0], []);
        adjList.set(equations[i][1], []);
    }

    // Build the graph
    for (let i = 0; i < equations.length; i++) {
        const u = equations[i][0];
        const v = equations[i][1];
        const weight = values[i];
        
        // u to v
        adjList.get(u).push([v,weight]);
        
        // v to u
        adjList.get(v).push([u, 1/weight]);
    }
    
    // Initialize results array
    const res = [];
    
    for (let i = 0; i < queries.length; i++) {
        // divisor
        const src = queries[i][0];
        
        // dividend
        const dest = queries[i][1];
        const seen = new Set();
        const val = dfs(adjList, src, src, dest, 1, seen);
        
        
        if (val === false) {
            res.push(-1);
        } else {
            res.push(val);
        }
    }
    
    return res;
}

var dfs = function(adjList, src, curr, dest, quotient, seen) {
    
    if (!adjList.has(dest) || !adjList.has(src)) {
        return -1;
    }
    
    if (src === dest) {
        return 1;
    }
    

    if (curr === dest) {
        return quotient;
    }
    
    seen.add(curr);
    
    const neighbors = adjList.get(curr);
    
    for (let i = 0; i < neighbors.length; i++) {
        if (seen.has(neighbors[i][0])) {
            continue;
        }
        const val = dfs(adjList, src, neighbors[i][0], dest, quotient * neighbors[i][1], seen);
       
        if (val !== false) return val;
    }
    
    return false;
}