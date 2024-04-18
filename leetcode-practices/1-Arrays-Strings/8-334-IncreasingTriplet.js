/**
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
 */

const increasingTriplet = function (nums) {
  // Initialize two variables to store the minimum and second minimum values
  let min = Infinity;
  let secondMin = Infinity;

  // Iterate through the array
  for (let num of nums) {
    // Check if the current number is less than the minimum
    if (num <= min) {
      min = num; // Update the minimum value
    } else if (num <= secondMin) {
      // Check if the current number is less than or equal to the second minimum
      secondMin = num; // Update the second minimum value
    } else {
      // If we find a number greater than the second minimum, we have a triplet
      return true;
    }
  }

  // If no triplet is found
  return false;
};

// Example usage
const nums1 = [1, 2, 3, 4, 5];
console.log(increasingTriplet(nums1));

const nums2 = [5, 4, 3, 2, 1];
console.log(increasingTriplet(nums2));