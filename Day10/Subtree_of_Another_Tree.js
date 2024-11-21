class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function isSubtree(root, subRoot) {
    if (!subRoot) return true; // An empty tree is always a subtree
    if (!root) return false;   // A non-empty tree cannot be a subtree of an empty tree
  
    // Check if the current tree matches the subRoot
    if (isSameTree(root, subRoot)) return true;
  
    // Recursively check the left and right subtrees
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  }
  
  function isSameTree(tree1, tree2) {
    if (!tree1 && !tree2) return true; // Both trees are null
    if (!tree1 || !tree2) return false; // One tree is null, the other is not
    if (tree1.val !== tree2.val) return false; // Values do not match
  
    // Check if left and right subtrees match
    return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
  }
  
  // Example Usage:
  // Construct the main tree:
  //      3
  //     / \
  //    4   5
  //   / \
  //  1   2
  
  const root = new TreeNode(3);
  root.left = new TreeNode(4, new TreeNode(1), new TreeNode(2));
  root.right = new TreeNode(5);
  
  // Construct the subtree:
  //    4
  //   / \
  //  1   2
  
  const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));
  
  console.log(isSubtree(root, subRoot)); // Output: true
  