function partition(s) {
    const result = [];

    // Helper function to check if a substring is a palindrome
    const isPalindrome = (str, start, end) => {
        while (start < end) {
            if (str[start] !== str[end]) return false;
            start++;
            end--;
        }
        return true;
    };

    // Backtracking function to find all partitions
    const backtrack = (start, path) => {
        if (start === s.length) {
            result.push([...path]); // Add current partition to result
            return;
        }

        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                path.push(s.substring(start, end + 1)); // Add substring to the current path
                backtrack(end + 1, path); // Explore further
                path.pop(); // Backtrack
            }
        }
    };

    backtrack(0, []);
    return result;
}

// Example Usage
const s = "aab";
console.log(partition(s));
// Output: [["a", "a", "b"], ["aa", "b"]]
