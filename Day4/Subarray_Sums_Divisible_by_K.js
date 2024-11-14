function subarraysDivByK(nums, k) {
    let prefixSum = 0;
    let count = 0;
    const remainderMap = {0: 1}; 
    
    for (let num of nums) {
       
        prefixSum += num;
        
        
        let remainder = prefixSum % k;
        
        
        if (remainder < 0) remainder += k;
        
        
        if (remainder in remainderMap) {
            count += remainderMap[remainder];
        }
        
        
        remainderMap[remainder] = (remainderMap[remainder] || 0) + 1;
    }
    
    return count;
}