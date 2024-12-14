var rightSideView = function(root) {
    if (!root) return [];
    let res = [];
    pre(root, 0);
    return res;
    
    function pre(node, h) {
        if (!node) return;
        res[h] = node.val;
        pre(node.left, h+1);
        pre(node.right, h+1);
    }
};