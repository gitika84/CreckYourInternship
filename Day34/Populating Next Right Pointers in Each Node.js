// Definition for a Node.
class Node {
    constructor(val, left = null, right = null, next = null) {
      this.val = val;
      this.left = left;
      this.right = right;
      this.next = next;
    }
  }
  
 
  function connect(root) {
    if (!root) return null;
  
    let levelStart = root;
  
    while (levelStart) {
      let current = levelStart;
  
      while (current) {
        // Connect left child to right child
        if (current.left) {
          current.left.next = current.right;
        }
  
        // Connect right child to the next node's left child
        if (current.right && current.next) {
          current.right.next = current.next.left;
        }
  
        // Move to the next node in the current level
        current = current.next;
      }
  
      // Move to the next level
      levelStart = levelStart.left;
    }
  
    return root;
  }
  
  const root = new Node(
    1,
    new Node(2, new Node(4), new Node(5)),
    new Node(3, new Node(6), new Node(7))
  );
  
  connect(root);
  
  console.log(root);
  