function splitArray(nums, k) {
    // Helper function to check if a target max sum is feasible
    function canSplit(nums, k, maxSum) {
      let currentSum = 0;
      let subarrays = 1; // Start with one subarray
  
      for (const num of nums) {
        // If adding this number exceeds maxSum, start a new subarray
        if (currentSum + num > maxSum) {
          subarrays++;
          currentSum = num; // Start new subarray with current number
          if (subarrays > k) return false; // Too many subarrays
        } else {
          currentSum += num;
        }
      }
  
      return true; // Split is possible within k subarrays
    }
  
    // Binary search on the answer
    let left = Math.max(...nums); // Minimum possible max sum
    let right = nums.reduce((a, b) => a + b, 0); // Maximum possible max sum
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (canSplit(nums, k, mid)) {
        right = mid; // Try a smaller max sum
      } else {
        left = mid + 1; // Increase the max sum
      }
    }
  
    return left; // The minimum largest sum
  }
  
  // Example Usage:
  console.log(splitArray([7, 2, 5, 10, 8], 2)); // Output: 18
  console.log(splitArray([1, 2, 3, 4, 5], 2)); // Output: 9
  console.log(splitArray([1, 4, 4], 3)); // Output: 4
  