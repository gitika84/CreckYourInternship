class NumArray {
    constructor(nums) {
        this.prefixSums = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.prefixSums[i + 1] = this.prefixSums[i] + nums[i];
        }
    }

    sumRange(left, right) {
        return this.prefixSums[right + 1] - this.prefixSums[left];
    }
}
