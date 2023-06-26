function findLHS(nums) {
    const frequency = {};
  
    // Count the frequency of each number in the array
    for (const num of nums) {
      frequency[num] = (frequency[num] || 0) + 1;
    }
  
    let longestSubsequenceLength = 0;
  
    // Iterate through the numbers and check for harmonious subsequences
    for (const num in frequency) {
      const currentFreq = frequency[num];
      const nextFreq = frequency[parseInt(num) + 1];
  
      if (nextFreq) {
        const subsequenceLength = currentFreq + nextFreq;
        longestSubsequenceLength = Math.max(longestSubsequenceLength, subsequenceLength);
      }
    }
  
    return longestSubsequenceLength;
  }
  
  