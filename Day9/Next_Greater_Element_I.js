function nextGreaterElement(nums1, nums2) {
    const nextGreaterMap = new Map();
    const stack = [];

    // Traverse nums2 to fill the nextGreaterMap
    for (let num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            nextGreaterMap.set(stack.pop(), num);
        }
        stack.push(num);
    }

    // Remaining elements in stack have no next greater element
    while (stack.length > 0) {
        nextGreaterMap.set(stack.pop(), -1);
    }

    // Build the answer array using nums1
    return nums1.map(num => nextGreaterMap.get(num));
}

// Example usage:
const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2)); // Output: [-1, 3, -1]

const nums1_2 = [2, 4];
const nums2_2 = [1, 2, 3, 4];
console.log(nextGreaterElement(nums1_2, nums2_2)); // Output: [3, -1]
