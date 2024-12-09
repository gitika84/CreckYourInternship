class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const verticalTraversal = (root) => {
    if (!root) return [];

    // Use a map to group nodes by column index
    const columnMap = new Map();

    // Use a queue for BFS, storing [node, row, col]
    const queue = [[root, 0, 0]];

    while (queue.length > 0) {
        const [node, row, col] = queue.shift();

        // Add the node to the column map
        if (!columnMap.has(col)) columnMap.set(col, []);
        columnMap.get(col).push([row, node.val]);

        // Add children to the queue
        if (node.left) queue.push([node.left, row + 1, col - 1]);
        if (node.right) queue.push([node.right, row + 1, col + 1]);
    }

    // Sort columns and prepare the result
    const sortedColumns = [...columnMap.entries()].sort((a, b) => a[0] - b[0]);
    const result = sortedColumns.map(([col, nodes]) => {
        // Sort nodes in the same column by row and value
        nodes.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
        return nodes.map(([row, val]) => val);
    });

    return result;
};

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(verticalTraversal(root));
// Output: [[4], [2], [1, 5, 6], [3], [7]]
