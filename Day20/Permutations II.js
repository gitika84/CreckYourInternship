function permuteUnique(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort to handle duplicates

    function backtrack(path, used) {
        if (path.length === nums.length) {
            result.push([...path]); // Add the current permutation to the result
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // Skip used numbers and duplicates
            if (used[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            used[i] = true; // Mark the number as used
            path.push(nums[i]);
            backtrack(path, used); // Recurse
            path.pop(); // Backtrack
            used[i] = false; // Unmark the number
        }
    }

    backtrack([], Array(nums.length).fill(false));
    return result;
}

// Example usage:
const nums = [1, 1, 2];
console.log(permuteUnique(nums));
// Output: [[1, 1, 2], [1, 2, 1], [2, 1, 1]]
