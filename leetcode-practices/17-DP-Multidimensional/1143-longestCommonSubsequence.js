/**
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;

  // Create a 2D DP array initialized to 0
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // Characters match: add 1 to the previous diagonal value
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // Characters don't match: take the maximum from top or left
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // The bottom-right cell contains the length of the LCS
  return dp[m][n];
};