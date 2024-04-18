/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  let sIndex = 0;

  for (let char of t) {
    if (s[sIndex] === char) {
      sIndex++;
    }

    if (sIndex === s.length) {
      // All characters in s are found in order
      return true;
    }
  }

  return sIndex === s.length;
};

// Example usage:
const s = "abc";
const t = "ahbgdc";
const result = isSubsequence(s, t);
console.log(result);
