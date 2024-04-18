/**
 * Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  // Use a Map to store the count of occurrences for each value
  const occurrencesMap = new Map();

  // Count occurrences
  for (const num of arr) {
    occurrencesMap.set(num, (occurrencesMap.get(num) || 0) + 1);
  }

  console.log(occurrencesMap);
  console.log(occurrencesMap.size);

  // Check if the count of occurrences is unique
  // The new set is created with any duplicated being removed
  const occurrencesSet = new Set(occurrencesMap.values());

  console.log(occurrencesSet)
  console.log(occurrencesSet.size)
  return occurrencesMap.size === occurrencesSet.size;
}

// Example usage
const array1 = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(array1));

// const array2 = [1, 2];
// console.log(uniqueOccurrences(array2));