function countRangeSum(nums, lower, upper) {
    let count = 0;

    // Helper function to perform merge sort
    function mergeSort(prefixSums, left, right) {
        if (left >= right) return 0;

        const mid = Math.floor((left + right) / 2);
        let count = mergeSort(prefixSums, left, mid) + mergeSort(prefixSums, mid + 1, right);

        let i = mid + 1;
        let j = mid + 1;
        let temp = [];
        let t = mid + 1;

        for (let k = left; k <= mid; k++) {
            while (i <= right && prefixSums[i] - prefixSums[k] < lower) i++;
            while (j <= right && prefixSums[j] - prefixSums[k] <= upper) j++;
            count += j - i;

            while (t <= right && prefixSums[t] < prefixSums[k]) {
                temp.push(prefixSums[t++]);
            }
            temp.push(prefixSums[k]);
        }

        while (t <= right) {
            temp.push(prefixSums[t++]);
        }

        for (let k = left; k <= right; k++) {
            prefixSums[k] = temp[k - left];
        }

        return count;
    }

    // Step 1: Compute prefix sums
    const prefixSums = [0];
    let sum = 0;
    for (const num of nums) {
        sum += num;
        prefixSums.push(sum);
    }

    // Step 2: Count range sums using merge sort
    return mergeSort(prefixSums, 0, prefixSums.length - 1);
}

// Example usage:
const nums = [-2, 5, -1];
const lower = -2;
const upper = 2;
console.log(countRangeSum(nums, lower, upper)); // Output: 3
