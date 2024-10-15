/**
 * You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.

You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.
 */

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const successfulPairs = function (spells, potions, success) {
  // Sort the potions array
  potions.sort((a, b) => a - b);

  // Helper function to find the first potion that forms a successful pair using binary search
  const binarySearch = (spell) => {
    let left = 0;
    let right = potions.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (spell * potions[mid] >= success) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return potions.length - left;  // Count of successful pairs
  };

  // For each spell, find the count of successful pairs using binary search
  return spells.map(spell => binarySearch(spell));
};