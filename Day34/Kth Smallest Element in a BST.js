var kthSmallest = function(root, k) {
    let vals = [];
    (function dfs(node) {
      if (vals.length !=k) { 
        if(node.left) dfs(node.left); 
        vals.push(node.val); 
        if (node.right) dfs(node.right); 
      }  
    })(root) 
    return vals[k-1]; 
  };