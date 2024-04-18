/**
 * You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = function (nums, k) {
  let operationsCount = 0; // Variable to track the number of operations
  const elementCountMap = new Map(); // Map to store the count of each element

  for (const num of nums) {
    // Skip elements greater than the target sum
    if (num > k) {
      continue;
    }

    const complement = k - num; // Calculate the complement for the current element

    // Check if a complement exists in the map and has a count greater than 0
    if (elementCountMap.has(complement) && elementCountMap.get(complement) > 0) {
      // Pair found, decrement complement count and increment operations count
      elementCountMap.set(complement, elementCountMap.get(complement) - 1);
      operationsCount++;
    } else {
      // No complement found, increment count for the current element
      elementCountMap.set(num, (elementCountMap.get(num) || 0) + 1);
    }
  }

  return operationsCount;
};

// Example usage:
const nums = [1, 2, 3, 4, 5];
const k = 6;
const result = maxOperations(nums, k);
console.log(result);
