function isSameTree(p, q) {
    // If both trees are null, they are the same
    if (!p && !q) {
        return true;
    }

    // If one tree is null and the other isn't, they are not the same
    if (!p || !q) {
        return false;
    }

    // If the values of the current nodes are different, they are not the same
    if (p.val !== q.val) {
        return false;
    }

    // Recursively check the left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Example usage:
// Define binary tree nodes
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Tree p
const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));

// Tree q
const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(isSameTree(p, q)); // Output: true
