/**
 * A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // Compare the middle element with its next neighbor
    if (nums[mid] > nums[mid + 1]) {
      // If the middle element is greater than the next element,
      // the peak must be on the left side
      right = mid;
    } else {
      // If the middle element is less than the next elemnt,
      // the peak must be on the right side
      left = mid + 1;
    }

    // At the end, left will point to the peak element
  }

  return left;
};