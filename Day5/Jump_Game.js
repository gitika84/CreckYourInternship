function canJump(nums) {
    let maxReach = 0; 

    for (let i = 0; i < nums.length; i++) {
       
        if (i > maxReach) return false;

        
        maxReach = Math.max(maxReach, i + nums[i]);

        
        if (maxReach >= nums.length - 1) return true;
    }

    return false;
}

const nums1 = [2, 3, 1, 1, 4]; 
const nums2 = [3, 2, 1, 0, 4];

console.log(canJump(nums1)); 
console.log(canJump(nums2)); 