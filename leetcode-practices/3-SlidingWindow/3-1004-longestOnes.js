/**
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
 */

const longestOnes = function (nums, k) {
  // Initialize pointers and variables
  let leftPointer = 0;        // Start of the current window
  let rightPointer = 0;       // End of the current window
  let maxConsecutiveOnes = 0; // Maximum consecutive 1's count
  let zeroCount = 0;          // Count of 0's in the current window

  // Iterate through the array using the right pointer
  while (rightPointer < nums.length) {
    // If the current number is 0, increase the count
    if (nums[rightPointer] === 0) {
      zeroCount++;
    }

    // Adjust the window by moving the left pointer when 0's exceed k
    while (zeroCount > k) {
      // If the left number is 0, decrease the zero count
      if (nums[leftPointer] === 0) {
        zeroCount--;
      }
      // Move the left pointer to shrink the window
      leftPointer++;
    }

    // Update the maximum consecutive 1's count
    maxConsecutiveOnes = Math.max(maxConsecutiveOnes, rightPointer - leftPointer + 1);

    // Move the right pointer to expand the window
    rightPointer++;
  }

  // Return the maximum consecutive 1's count
  return maxConsecutiveOnes;
}

// Example usage
const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;
const maxOnes = longestOnes(nums, k);
console.log(maxOnes);