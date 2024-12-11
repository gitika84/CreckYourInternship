function getMinimumDifference(root) {
    let prev = null;
    let minDiff = Infinity;

    function inOrderTraversal(node) {
        if (!node) return;

        // Traverse the left subtree
        inOrderTraversal(node.left);

        // Process the current node
        if (prev !== null) {
            minDiff = Math.min(minDiff, Math.abs(node.val - prev));
        }
        prev = node.val;

        // Traverse the right subtree
        inOrderTraversal(node.right);
    }

    inOrderTraversal(root);
    return minDiff;
}

// Example usage:
const bst = new TreeNode(4, 
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(6)
);

console.log(getMinimumDifference(bst)); // Output: 1