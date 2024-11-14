function subarraySum(nums, k) {
    let prefixSum = 0;
    let count = 0;
    const prefixMap = { 0: 1 }; 
    for (let num of nums) {
       
        prefixSum += num;

        let target = prefixSum - k;
        if (target in prefixMap) {
            count += prefixMap[target];
        }

        prefixMap[prefixSum] = (prefixMap[prefixSum] || 0) + 1;
    }

    return count;
}

const nums = [1, 1, 1];
const k = 2;
console.log(subarraySum(nums, k)); 