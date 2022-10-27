"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  const halfwayPoint = Math.floor(array.length / 2);

  if (array.length === 0) return false;
  if (array.length === 1 && target !== array[0]) return false;

  if (target === array[halfwayPoint]) {
    return true;
  } else if (target < array[halfwayPoint]) {
    const smallerArr = array.slice(0, halfwayPoint);
    return binarySearch(smallerArr, target);
  } else {
    const biggerArr = array.slice(halfwayPoint);
    return binarySearch(biggerArr, target);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
