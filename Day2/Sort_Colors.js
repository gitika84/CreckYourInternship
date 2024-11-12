
// function sortColors(nums){
//     let start = 0;
//     let mid = 0;
//     let end = nums.length-1;

//     while(mid <= end ){
//         switch (nums[mid]) {
//             case 0:
//                 swap(nums, start, mid)
//                 mid++;
//                 start++;
//                 break;
//             case 1:
//                 mid++
//                 break;

//             case 2:
//                 swap(nums, mid, end)
//                 end--;
//                 break;
//             default:
//                 break;
//         }
//     }
// }
// const arr = new Array;
// function swap(arr, pos1, pos2){
//     let temp = arr[pos1]
//     arr[pos1] = arr[pos2]
//     arr[pos2] = temp;
// }

// console.log(sortColors([2,0,2,1,1,0]))


function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
           
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else { 
           
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
}

let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums); 