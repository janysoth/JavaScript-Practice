/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const length = nums.length;
  const result = new Array(length).fill(1);

  let leftProduct = 1;
  let rightProduct = 1;

  for (let i = 0; i < length; i++) {
    result[i] *= leftProduct;
    leftProduct *= nums[i];

    result[length - 1 - i] *= rightProduct;
    rightProduct *= nums[length - 1 - i];
  }

  return result;
};

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
