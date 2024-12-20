/**
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
  // Create a 2D array for storing results of subproblems
  const dp = Array(m).fill(0).map(() => Array(n).fill(0));

  // Initialize the first row and first column to 1
  for (let i = 0; i < m; i++) dp[i][0] = 1;
  for (let j = 0; j < n; j++) dp[0][j] = 1;

  // Fill in the dp table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // The result is in the bottom-right corner
  return dp[m - 1][n - 1];
};