/**
 * You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and a positive integer k. You must choose a subsequence of indices from nums1 of length k.

For chosen indices i0, i1, ..., ik - 1, your score is defined as:

The sum of the selected elements from nums1 multiplied with the minimum of the selected elements from nums2.
It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).
Return the maximum possible score.

A subsequence of indices of an array is a set that can be derived from the set {0, 1, ..., n-1} by deleting some or no elements.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */

const maxScore = function (nums1, nums2, k) {
  // Create pairs of [nums2[i], nums1[i]] and sort by nums2 in descending order
  let pairs = nums1.map((num, i) => [nums2[i], num]).sort((a, b) => b[0] - a[0]);

  let maxScore = 0;
  let sum = 0;
  let minHeap = [];

  for (let i = 0; i < pairs.length; i++) {
    let [num2, num1] = pairs[i];

    // Add num1 to the heap (and sum)
    sum += num1;
    minHeap.push(num1);

    // Sort the heap (can also use a priority queue for efficiency)
    minHeap.sort((a, b) => a - b);

    // Keep the heap size equal to k by removing the smallest elements
    if (minHeap.length > k) {
      sum -= minHeap.shift();  // Remove the smallest element from the sum
    }

    // If we have exactly k elements, calculate the score
    if (minHeap.length === k) {
      maxScore = Math.max(maxScore, sum * num2);
    }
  }

  return maxScore;
};