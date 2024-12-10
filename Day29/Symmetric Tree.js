// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Checks whether a binary tree is symmetric.
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
    if (!root) {
        return true; // An empty tree is symmetric
    }

    // Helper function to compare two subtrees
    const isMirror = (t1, t2) => {
        if (!t1 && !t2) {
            return true; // Both nodes are null
        }
        if (!t1 || !t2) {
            return false; // One node is null and the other is not
        }
        // Check values and recursively check left and right subtrees
        return (
            t1.val === t2.val &&
            isMirror(t1.left, t2.right) &&
            isMirror(t1.right, t2.left)
        );
    };

    return isMirror(root.left, root.right);
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root)); // Output: true
