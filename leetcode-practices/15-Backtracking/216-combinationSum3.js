/**
 * Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
  const result = [];

  function backtrack(start, remaining, path) {
    // Base case
    if (path.length === k && remaining === 0) {
      result.push([...path]);
      return;
    }

    if (path.length > k || remaining < 0) return;

    for (let i = start; i <= 9; i++) {
      // Choose the current number
      path.push(i);

      // Recur with the next number and update the sum
      backtrack(i + 1, remaining - i, path);

      // Backtrack by removing the last number added
      path.pop();
    }
  }

  backtrack(1, n, []);
  return result;
};