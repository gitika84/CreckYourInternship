function hasPathSum(root, targetSum) {
    // Base case: if the tree is empty, return false
    if (!root) return false;

    // Check if we are at a leaf node and the path sum equals targetSum
    if (!root.left && !root.right) {
        return root.val === targetSum;
    }

    // Recursively check the left and right subtrees with the updated targetSum
    const newTargetSum = targetSum - root.val;
    return hasPathSum(root.left, newTargetSum) || hasPathSum(root.right, newTargetSum);
}

// Example usage:
const tree = new TreeNode(5, 
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
    new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
);

console.log(hasPathSum(tree, 22)); // Output: true
