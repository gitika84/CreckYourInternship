function lengthOfLIS(nums) {
    const sub = []; // Array to keep track of the smallest last element of LIS

    for (const num of nums) {
        let left = 0, right = sub.length;

        // Binary search for the position to replace or append
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (sub[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // Replace or extend the subsequence
        if (left < sub.length) {
            sub[left] = num;
        } else {
            sub.push(num);
        }
    }

    return sub.length; // Length of the longest increasing subsequence
}

// Example usage:
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output: 4 (subsequence: [2, 3, 7, 101])
