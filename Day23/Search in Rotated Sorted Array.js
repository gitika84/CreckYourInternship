function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      // If the target is found
      if (nums[mid] === target) return mid;
  
      // Check if the left half is sorted
      if (nums[left] <= nums[mid]) {
        // Check if the target is within the sorted left half
        if (nums[left] <= target && target < nums[mid]) {
          right = mid - 1; // Search in the left half
        } else {
          left = mid + 1; // Search in the right half
        }
      } 
      // Otherwise, the right half must be sorted
      else {
        // Check if the target is within the sorted right half
        if (nums[mid] < target && target <= nums[right]) {
          left = mid + 1; // Search in the right half
        } else {
          right = mid - 1; // Search in the left half
        }
      }
    }
  
    // Target not found
    return -1;
  }
  
  // Example Usage:
  console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
  console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
  console.log(search([1], 0)); // Output: -1
  