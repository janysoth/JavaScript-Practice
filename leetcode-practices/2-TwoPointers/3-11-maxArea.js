/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let maxWater = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;

  while (leftPointer < rightPointer) {
    const leftHeight = height[leftPointer];
    const rightHeight = height[rightPointer];

    // Calculate the current container's water capacity
    const containerHeight = Math.min(leftHeight, rightHeight);
    const containerWidth = rightPointer - leftPointer;
    const currentWater = containerHeight * containerWidth;

    // Update the maximum water capacity
    maxWater = Math.max(maxWater, currentWater);

    // Move the pointers towards each other based on the height
    if (leftHeight < rightHeight) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return maxWater;
};

// Example usage:
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));