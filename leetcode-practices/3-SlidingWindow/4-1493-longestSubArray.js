/**
 * Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
 */

const longestSubarray = function (nums) {
  // Initialize variables to store counts.
  let maxCount = 0;         // Maximum count of consecutive 1's.
  let currentCount = 0;     // Current count of consecutive 1's.
  let prevCount = 0;        // Count of consecutive 1's before encountering a 0.

  // Iterate through the binary array.
  for (const num of nums) {
    if (num === 1) {
      // If the current element is 1, increment the current count.
      currentCount++;
    } else {
      // If the current element is 0, update the previous count and reset the current count.
      prevCount = currentCount;
      currentCount = 0;
    }

    // Update the maximum count considering the case where one 0 is deleted.
    maxCount = Math.max(maxCount, prevCount + currentCount);
  }

  // Return the maximum count, ensuring it is not greater than the length of the array minus 1.
  return Math.min(maxCount, nums.length - 1);

};

const nums = [1, 1, 0, 1];
const result = longestSubarray(nums);
console.log(result);