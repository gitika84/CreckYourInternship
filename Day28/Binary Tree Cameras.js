class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const minCameraCover = (root) => {
    let cameras = 0;

    const dfs = (node) => {
        if (!node) return 2; // Null nodes are considered covered

        const left = dfs(node.left);
        const right = dfs(node.right);

        if (left === 0 || right === 0) {
            // If either child is not covered, install a camera here
            cameras++;
            return 1; // Node has a camera
        }

        if (left === 1 || right === 1) {
            // If either child has a camera, this node is covered
            return 2; // Node is covered
        }

        // If children are covered but don't have a camera, this node is not covered
        return 0; // Node is not covered
    };

    // If the root is not covered, add a camera
    if (dfs(root) === 0) {
        cameras++;
    }

    return cameras;
};

// Example usage:
let root = new TreeNode(0);
root.left = new TreeNode(0);
root.left.left = new TreeNode(0);
root.left.left.left = new TreeNode(0);

console.log(minCameraCover(root)); // Output: 2
