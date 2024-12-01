function combinationSum2(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b); // Sort to handle duplicates easily

    function backtrack(start, target, path) {
        if (target === 0) {
            result.push([...path]); // Found a valid combination
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            // If the current candidate exceeds the target, no point in continuing
            if (candidates[i] > target) break;

            // Include the current candidate and explore further
            path.push(candidates[i]);
            backtrack(i + 1, target - candidates[i], path);
            path.pop(); // Backtrack
        }
    }

    backtrack(0, target, []);
    return result;
}

// Example usage:
const candidates = [10, 1, 2, 7, 6, 1, 5];
const target = 8;
console.log(combinationSum2(candidates, target));
// Output: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]
