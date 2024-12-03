function countSmaller(nums) {
    const counts = Array(nums.length).fill(0);
    const indexedNums = nums.map((num, index) => [num, index]);
  
    const mergeSort = (start, end) => {
      if (end - start <= 1) return;
  
      const mid = Math.floor((start + end) / 2);
      mergeSort(start, mid);
      mergeSort(mid, end);
  
      const merged = [];
      let leftIndex = start, rightIndex = mid;
      let rightCount = 0;
  
      while (leftIndex < mid && rightIndex < end) {
        if (indexedNums[rightIndex][0] < indexedNums[leftIndex][0]) {
          merged.push(indexedNums[rightIndex]);
          rightCount++;
          rightIndex++;
        } else {
          counts[indexedNums[leftIndex][1]] += rightCount;
          merged.push(indexedNums[leftIndex]);
          leftIndex++;
        }
      }
  
      while (leftIndex < mid) {
        counts[indexedNums[leftIndex][1]] += rightCount;
        merged.push(indexedNums[leftIndex]);
        leftIndex++;
      }
  
      while (rightIndex < end) {
        merged.push(indexedNums[rightIndex]);
        rightIndex++;
      }
  
      for (let i = start; i < end; i++) {
        indexedNums[i] = merged[i - start];
      }
    };
  
    mergeSort(0, nums.length);
    return counts;
  }
  
  // Example Usage:
  const nums = [5, 2, 6, 1];
  console.log(countSmaller(nums)); // Output: [2, 1, 1, 0]
  