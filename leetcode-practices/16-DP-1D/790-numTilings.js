/**
 * You have two types of tiles: a 2 x 1 domino shape and a tromino shape. You may rotate these shapes.


Given an integer n, return the number of ways to tile an 2 x n board. Since the answer may be very large, return it modulo 109 + 7.

In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.
 */

/**
 * @param {number} n
 * @return {number}
 */
const numTilings = function (n) {
  const MOD = 1e9 + 7;

  if (n === 1) return 1;
  if (n === 2) return 2;

  // Initialize DP arrays
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  let prev = 1; // Previous sum for dp[n-2] values

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + 2 * prev) % MOD;
    prev = (prev + dp[i + 2]) % MOD;
  }

  return dp[n];
};