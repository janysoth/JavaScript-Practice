/**
 * You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
  // Step 1: Initialize the sum variable to store the sum of the first k elements
  let sum = 0;

  // Step 2: Calculate the sum of the first k elements
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  // Step 3: Initialize maxAverage with the average of the first subarray
  let maxAverage = sum / k;

  // Step 4: Iterate through the array using the sliding window approach
  for (let i = k; i < nums.length; i++) {
    // Update the sum by adding the next element and subtracting the first element of the previous subarray
    sum += nums[i] - nums[i - k];

    // Update maxAverage if the current subarray has a higher average
    maxAverage = Math.max(maxAverage, sum / k);
  }

  // Step 5: Return the maximum average value
  return maxAverage;
}

// Example usage:
const nums = [1, 12, -5, -6, 50, 3];
const k = 2;
const result = findMaxAverage(nums, k);
console.log(result);