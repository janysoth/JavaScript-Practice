/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  return nums.reduce((acc, num) => acc ^ num, 0);
};