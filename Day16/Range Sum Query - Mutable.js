class NumArray {
    constructor(nums) {
        this.n = nums.length;
        this.tree = new Array(this.n * 2).fill(0);

        // Build the segment tree
        for (let i = 0; i < this.n; i++) {
            this.tree[this.n + i] = nums[i];
        }
        for (let i = this.n - 1; i > 0; i--) {
            this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
        }
    }

    update(index, val) {
        // Update the leaf node
        let pos = this.n + index;
        this.tree[pos] = val;

        // Update the internal nodes
        while (pos > 1) {
            pos = Math.floor(pos / 2);
            this.tree[pos] = this.tree[pos * 2] + this.tree[pos * 2 + 1];
        }
    }

    sumRange(left, right) {
        let sum = 0;
        let l = this.n + left;
        let r = this.n + right;

        while (l <= r) {
            if (l % 2 === 1) {
                sum += this.tree[l];
                l++;
            }
            if (r % 2 === 0) {
                sum += this.tree[r];
                r--;
            }
            l = Math.floor(l / 2);
            r = Math.floor(r / 2);
        }

        return sum;
    }
}
