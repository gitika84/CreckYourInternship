function reversePairs(nums) {
    function mergeSort(arr, start, end) {
        if (start >= end) return 0;

        const mid = Math.floor((start + end) / 2);

        
        let count = mergeSort(arr, start, mid) + mergeSort(arr, mid + 1, end);

       
        let j = mid + 1;
        for (let i = start; i <= mid; i++) {
            while (j <= end && arr[i] > 2 * arr[j]) {
                j++;
            }
            count += j - (mid + 1);
        }

       
        const temp = [];
        let i = start, k = mid + 1;
        while (i <= mid && k <= end) {
            if (arr[i] <= arr[k]) {
                temp.push(arr[i++]);
            } else {
                temp.push(arr[k++]);
            }
        }

        while (i <= mid) temp.push(arr[i++]);
        while (k <= end) temp.push(arr[k++]);

        for (let i = start; i <= end; i++) {
            arr[i] = temp[i - start];
        }

        return count;
    }

    return mergeSort(nums, 0, nums.length - 1);
}


const nums1 = [1, 3, 2, 3, 1]; 
const nums2 = [2, 4, 3, 5, 1]; 

console.log(reversePairs(nums1)); 
console.log(reversePairs(nums2)); 
