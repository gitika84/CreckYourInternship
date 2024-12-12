class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function isBalanced(root) {
    // Helper function to calculate height and check balance
    function checkHeight(node) {
        if (node === null) {
            return 0; // Base case: height of an empty tree is 0
        }

        // Recursively get the height of left and right subtrees
        const leftHeight = checkHeight(node.left);
        if (leftHeight === -1) return -1; // Propagate failure

        const rightHeight = checkHeight(node.right);
        if (rightHeight === -1) return -1; // Propagate failure

        // If the difference in heights is more than 1, the tree is unbalanced
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // Return the height of the current node
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Start the recursive check from the root
    return checkHeight(root) !== -1;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.left.left = new TreeNode(6);

console.log(isBalanced(root)); // Output: false (tree is not height-balanced)
