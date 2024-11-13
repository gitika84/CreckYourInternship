function maxArea(height) {
    let left = 0;                
    let right = height.length - 1; 
    let maxWater = 0;

   
    while (left < right) {
       
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);

        const area = width * minHeight;
        maxWater = Math.max(maxWater, area);

       
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height)); 