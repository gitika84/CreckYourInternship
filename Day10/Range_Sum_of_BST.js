class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function rangeSumBST(root, low, high) {
    if (!root) return 0; // Base case: if the node is null, return 0
  
    let sum = 0;
  
    // Check if the current node's value is within the range
    if (root.val >= low && root.val <= high) {
      sum += root.val;
    }
  
    // If the current node's value is greater than low, explore the left subtree
    if (root.val > low) {
      sum += rangeSumBST(root.left, low, high);
    }
  
    // If the current node's value is less than high, explore the right subtree
    if (root.val < high) {
      sum += rangeSumBST(root.right, low, high);
    }
  
    return sum;
  }
  
  // Example Usage:
  // Construct the binary search tree:
  //       10
  //      /  \
  //     5   15
  //    / \    \
  //   3   7    18
  
  const root = new TreeNode(10);
  root.left = new TreeNode(5, new TreeNode(3), new TreeNode(7));
  root.right = new TreeNode(15, null, new TreeNode(18));
  
  // Range: [7, 15]
  console.log(rangeSumBST(root, 7, 15)); // Output: 32 (7 + 10 + 15)
  