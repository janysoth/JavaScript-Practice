/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let nonZeroIndex = 0;

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is non-zero, move it to the nonZeroIndex and increment the nonZeroIndex
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // Fill the remaining elements with 0
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// Example usage:
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);