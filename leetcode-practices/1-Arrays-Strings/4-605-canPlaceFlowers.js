/**
 * You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
 */

/**
 * Constraints:
    + 1 <= flowerbed.length <= 2 * 10^4
    + flowerbed[i] is 0 or 1.
    + There are no two adjacent flowers in flowerbed.
    + 0 <= n <= flowerbed.length
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {

  // Iterate through the elements of the flowerbed array
  for (let i = 0; i < flowerbed.length; i++) {

    // Check if the current position is empty and satisfies the planting conditions
    // 3 conditions need to be met flowers can be planted
    // 1: flowerbed[i] == 0 -> checks to see if the current position is empty.
    // 2: (i == 0 || flowerbed[i - 1] == 0) -> checks to see if the current position is the first position in the array or if the previous position is empty.
    // 3: (i == flowerbed.length - 1 || flowerbed[i + 1] == 0) -> checks to see if the current position is the last position in the array or the next position is empty. 

    if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) {
      // Plant a flower at the current position
      flowerbed[i] = 1;
      // Decrement the number of flowers to be planted
      n--;
      // Increment the loop variable to move to the next position
      i++;
    }
  }
  // Check if all required flowers have been planted (n is less than or equal to 0)
  return n <= 0;
};

// Example usage:
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
console.log(canPlaceFlowers(flowerbed, n));
