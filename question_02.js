
let distributeCandies = function(candyType) {
    const maxTypes = candyType.length / 2;
    const uniqueCandies = new Set(candyType);
  
    return Math.min(maxTypes, uniqueCandies.size);
  };