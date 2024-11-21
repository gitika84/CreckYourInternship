class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function invertTree(root) {
    if (!root) return null; // Base case: if the node is null, return null
  
    // Swap the left and right subtrees
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
  
    // Recursively invert the left and right subtrees
    invertTree(root.left);
    invertTree(root.right);
  
    return root; // Return the root of the inverted tree
  }
  
  // Example Usage:
  // Construct the binary tree:
  //      4
  //     / \
  //    2   7
  //   / \ / \
  //  1  3 6  9
  
  const root = new TreeNode(4);
  root.left = new TreeNode(2, new TreeNode(1), new TreeNode(3));
  root.right = new TreeNode(7, new TreeNode(6), new TreeNode(9));
  
  console.log("Before Inversion:", JSON.stringify(root, null, 2));
  const invertedRoot = invertTree(root);
  console.log("After Inversion:", JSON.stringify(invertedRoot, null, 2));
  