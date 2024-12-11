function lowestCommonAncestor(root, p, q) {
    if (!root) return null;

    // If both nodes are smaller than root, LCA is in the left subtree
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }

    // If both nodes are larger than root, LCA is in the right subtree
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    // If neither of the above cases, root is the LCA
    return root;
}

// Example usage:
const root = new TreeNode(6, 
    new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
    new TreeNode(8, new TreeNode(7), new TreeNode(9))
);

const nodeP = root.left; // Node with value 2
const nodeQ = root.left.right; // Node with value 4

console.log(lowestCommonAncestor(root, nodeP, nodeQ)); // Output: TreeNode with value 2
