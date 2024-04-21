/**
 * Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const distinctInNums1 = new Set(nums1)
  const distinctInNums2 = new Set(nums2)

  for (const n of nums1) {
    if (distinctInNums2.has(n)) {
      distinctInNums1.delete(n);
      distinctInNums2.delete(n);
    }
  }

  return [Array.from(distinctInNums1), Array.from(distinctInNums2)];
}

// Example usage:
const nums1 = [1, 2, 2, 3, 4];
const nums2 = [2, 3, 5];

const result = findDifference(nums1, nums2);
console.log(result);