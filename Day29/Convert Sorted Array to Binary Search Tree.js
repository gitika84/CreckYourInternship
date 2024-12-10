// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Converts a sorted array to a height-balanced BST.
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
    if (!nums.length) {
        return null;
    }

    const helper = (left, right) => {
        if (left > right) {
            return null;
        }

        // Choose the middle element as the root
        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);

        // Recursively build the left and right subtrees
        root.left = helper(left, mid - 1);
        root.right = helper(mid + 1, right);

        return root;
    };

    return helper(0, nums.length - 1);
}

// Example usage
const nums = [-10, -3, 0, 5, 9];
const bst = sortedArrayToBST(nums);
console.log(bst);
