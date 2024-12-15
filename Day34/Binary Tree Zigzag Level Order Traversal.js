// Definition for a binary tree node.
class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  
  function zigzagLevelOrder(root) {
    if (!root) return [];
  
    const result = [];
    const queue = [root];
    let leftToRight = true;
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      const currentLevel = [];
  
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
  
        if (leftToRight) {
          currentLevel.push(node.val);
        } else {
          currentLevel.unshift(node.val);
        }
  
        // Add child nodes to the queue
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
  
      // Add the current level to the result
      result.push(currentLevel);
  
      // Toggle the traversal direction
      leftToRight = !leftToRight;
    }
  
    return result;
  }
  
  // Example usage
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, null, new TreeNode(6))
  );
  
  console.log(zigzagLevelOrder(root));

  