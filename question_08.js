
var smallestRangeI = function(nums, k) {
    const n = nums.length;
    let minNum = Infinity;
    let maxNum = -Infinity;
  
    for (let i = 0; i < n; i++) {
      minNum = Math.min(minNum, nums[i]);
      maxNum = Math.max(maxNum, nums[i]);
    }
  
    if (minNum + k >= maxNum - k) {
      return 0; // No operation needed, already minimum score
    }
  
    return maxNum - minNum - 2 * k;
  
  };