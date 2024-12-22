
var maxProduct = function (nums) {
    
    if (nums.length === 0) {
        return 0;
    }


    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let result = maxSoFar;

   
    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i];

        
        const tempMaxSoFar = Math.max(
            curr,
            maxSoFar * curr,
            minSoFar * curr
        );

        minSoFar = Math.min(
            curr,
            maxSoFar * curr,
            minSoFar * curr
        );

        maxSoFar = tempMaxSoFar;

      
        result = Math.max(maxSoFar, result);
    }

  
    return result;
};