/**
 * Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  // Calculate the total sum of the array
  const totalSum = nums.reduce((acc, num) => acc + num, 0);

  // Initialize the left sum to 0
  let leftSum = 0;

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Check if the left sum is equal to the right sum at the current index
    if (leftSum === totalSum - leftSum - nums[i]) {
      // Return the index if it's a pivot index
      return i;
    }

    // Update the left sum for the next iteration
    leftSum += nums[i];
  }

  // If no pivot index is found, return -1
  return -1;
};

// Example usage:
const nums = [1, 7, 3, 6, 5, 6];
const result = pivotIndex(nums);
console.log(result);