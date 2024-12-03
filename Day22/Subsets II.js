function subsetsWithDup(nums) {
    // Sort the array to handle duplicates
    nums.sort((a, b) => a - b);
  
    const result = [];
    
    const backtrack = (start, subset) => {
      result.push([...subset]);
  
      for (let i = start; i < nums.length; i++) {
        // Skip duplicates
        if (i > start && nums[i] === nums[i - 1]) {
          continue;
        }
        
        // Include the current number
        subset.push(nums[i]);
        backtrack(i + 1, subset);
        // Exclude the current number (backtrack)
        subset.pop();
      }
    };
  
    backtrack(0, []);
    return result;
  }
  
  // Example Usage
  const nums = [1, 2, 2];
  console.log(subsetsWithDup(nums));
  