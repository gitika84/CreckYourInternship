// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Merges two binary trees.
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
function mergeTrees(root1, root2) {
    // If one of the trees is null, return the other tree
    if (!root1) return root2;
    if (!root2) return root1;

    // Merge the values of the root nodes
    const mergedRoot = new TreeNode(root1.val + root2.val);

    // Recursively merge the left and right subtrees
    mergedRoot.left = mergeTrees(root1.left, root2.left);
    mergedRoot.right = mergeTrees(root1.right, root2.right);

    return mergedRoot;
}

// Example usage
const root1 = new TreeNode(1);
root1.left = new TreeNode(3);
root1.right = new TreeNode(2);
root1.left.left = new TreeNode(5);

const root2 = new TreeNode(2);
root2.left = new TreeNode(1);
root2.right = new TreeNode(3);
root2.left.right = new TreeNode(4);
root2.right.right = new TreeNode(7);

const mergedTree = mergeTrees(root1, root2);

function printTree(root) {
    if (!root) return;
    console.log(root.val);
    printTree(root.left);
    printTree(root.right);
}

printTree(mergedTree);
// Output:
// 3
// 4
// 5
// 4
// 5
// 7
