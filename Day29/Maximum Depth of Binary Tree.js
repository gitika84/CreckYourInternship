// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Finds the maximum depth of a binary tree.
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
    if (!root) {
        return 0; // Base case: if the tree is empty, depth is 0
    }

    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // The depth of the current tree is the greater of the two subtrees' depths + 1
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(maxDepth(root)); // Output: 3
