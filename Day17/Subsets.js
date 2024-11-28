function subsets(nums) {
    const result = [];
    
    // Helper function to generate subsets using backtracking
    function backtrack(start, current) {
        // Add the current subset to the result
        result.push([...current]);
        
        // Explore further subsets
        for (let i = start; i < nums.length; i++) {
            // Include nums[i] in the current subset
            current.push(nums[i]);
            
            // Recurse with the next start index
            backtrack(i + 1, current);
            
            // Backtrack: remove nums[i] from the current subset
            current.pop();
        }
    }
    
    // Start the backtracking process
    backtrack(0, []);
    
    return result;
}

// Example usage
const nums = [1, 2, 3];
console.log(subsets(nums));
