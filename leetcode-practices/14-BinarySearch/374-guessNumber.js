/**
 * We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return
 the number that I picked.
 */

/** 
* Forward declaration of guess API.
* @param {number} num   your guess
* @return 	     -1 if num is higher than the picked number
*			      1 if num is lower than the picked number
*               otherwise return 0
* var guess = function(num) {}
*/

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function (n) {
  let low = 1;
  let high = n;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const result = guess(mid);

    if (result === 0) {
      return mid; // Found the number
    } else if (result === 1) {
      low = mid + 1; // Target is higher, move to the right half
    } else {
      high = mid - 1; // Target is lower, move to the left half
    }
  }

  return -1; // Fallback, though the problem guarantees a solution exists
};