/**
 * Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb

Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.

For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function (word1, word2) {
  // Check if the lengths of the two words are equal
  if (word1.length !== word2.length) {
    return false; // Different lengths, cannot be close
  }

  // Initialize arrays to store the frequency of each character in the words
  const frequency1 = new Array(26).fill(0);
  const frequency2 = new Array(26).fill(0);

  // Iterate through the characters of both words to update character frequencies
  for (let i = 0; i < word1.length; i++) {
    frequency1[word1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    frequency2[word2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  // Check if there is any character with non-zero frequency in one word and zero frequency in the other
  for (let index = 0; index < 26; index++) {
    if ((frequency1[index] === 0 && frequency2[index] !== 0) ||
      (frequency1[index] !== 0 && frequency2[index] === 0)) {
      return false;
    }
  }

  // Sort the frequency arrays to compare if they are the same
  frequency1.sort((a, b) => a - b);
  frequency2.sort((a, b) => a - b);

  // Compare the sorted frequency arrays using JSON.stringify
  return JSON.stringify(frequency1) === JSON.stringify(frequency2);
};

// Example usage:
const word1 = "abcde";
const word2 = "aecdb";

const result = closeStrings(word1, word2);
console.log(result);