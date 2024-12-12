function generateTrees(n) {
    if (n === 0) {
      return [];
    }
  
    return generateTreesHelper(1, n);
  }
  
  function generateTreesHelper(start, end) {
    const result = [];
  
    if (start > end) {
      result.push(null);
      return result;
    }
  
    for (let i = start; i <= end; i++) {
      const leftSubtrees = generateTreesHelper(start, i - 1);
      const rightSubtrees = generateTreesHelper(i + 1, end);
  
      for (let left of leftSubtrees) {
        for (let right of rightSubtrees) {
          const root = new TreeNode(i, left, right);
          result.push(root);
        }
      }
    }
  
    return result;
  }