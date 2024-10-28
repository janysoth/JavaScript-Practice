/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  // Mapping of digits to letters
  const phoneMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const result = [];

  // Helper function for backtracking
  const backtrack = (index, path) => {
    if (path.length === digits.length) {
      result.push(path);
      return;
    }

    let possibleLetters = phoneMap[digits[index]];

    for (let letter of possibleLetters)
      backtrack(index + 1, path + letter);
  };

  backtrack(0, "");
  return result;
};