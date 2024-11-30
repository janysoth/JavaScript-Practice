/**
 * Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // Helper function to create the DP table
  function createDPTable(rows, cols) {
    return Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));
  }

  // Helper function to fill base cases in the DP table
  function fillBaseCases(dp, rows, cols) {
    for (let i = 0; i <= rows; i++) {
      dp[i][0] = i; // Cost of deleting all characters to reach an empty string
    }
    for (let j = 0; j <= cols; j++) {
      dp[0][j] = j; // Cost of inserting all characters to form the string
    }
  }

  // Create and initialize the DP table
  const dp = createDPTable(m, n);
  fillBaseCases(dp, m, n);

  // Compute the minimum distance using dynamic programming
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // No operation needed if characters match
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],    // Delete
          dp[i][j - 1],    // Insert
          dp[i - 1][j - 1] // Replace
        );
      }
    }
  }

  return dp[m][n];
};

// Example usage
const word1 = "horse";
const word2 = "ros";
console.log(minDistance(word1, word2)); // Output: 3