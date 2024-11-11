function moveZeroes(nums) {
    let lastNonZero = 0; // Position to place the next non-zero element

    // First pass: Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZero] = nums[i];
            lastNonZero++;
        }
    }

    // Second pass: Fill the rest of the array with 0s
    for (let i = lastNonZero; i < nums.length; i++) {
        nums[i] = 0;
    }
}

let nums = [2,0,4,0,0,5,6,0]
moveZeroes(nums)
console.log(nums)