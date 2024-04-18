/**
 * Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  // Trim leading and trailing spaces from the input string
  s = s.trim();

  // Split the input string into an array of words using one or more spaces as the separator
  let words = s.split(/\s+/);

  // Reverse the array of words
  let reversedWords = words.reverse();

  // Join the reversed array of words into a string with a single space
  let result = reversedWords.join(' ');

  return result;
};

// Example usage:
let inputString = "  Hello World ";
let outputString = reverseWords(inputString);
console.log(outputString);






