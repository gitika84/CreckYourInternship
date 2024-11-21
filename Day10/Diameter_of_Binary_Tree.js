class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function diameterOfBinaryTree(root) {
    let diameter = 0;
  
    function dfs(node) {
      if (!node) return 0;
  
      // Recursively find the height of left and right subtrees
      const leftHeight = dfs(node.left);
      const rightHeight = dfs(node.right);
  
      // Update the diameter if the path through this node is longer
      diameter = Math.max(diameter, leftHeight + rightHeight);
  
      // Return the height of this subtree
      return 1 + Math.max(leftHeight, rightHeight);
    }
  
    dfs(root);
    return diameter;
  }
  
  // Example Usage:
  // Construct the binary tree:
  //      1
  //     / \
  //    2   3
  //   / \     
  //  4   5    
  
  const root = new TreeNode(1);
  root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
  root.right = new TreeNode(3);
  
  console.log(diameterOfBinaryTree(root)); // Output: 3
  