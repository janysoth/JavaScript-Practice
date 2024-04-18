/**
 * Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 */

/**
 * @param {string} inputString
 * @return {string}
 */

// Define a function called reverseVowels that takes a string "inputString" as input.
const reverseVowels = function (inputString) {

  // Define a helper function to check if a character is a vowel.
  const vowels = 'aeiouAEIOU';
  const isVowel = (char) => vowels.includes(char);

  // Convert the input string into an array of characters.
  const chars = inputString.split("");

  // Initialize two pointers, one at the start and one at the end of the array.
  let leftSide = 0;
  let rightSide = chars.length - 1;

  while (leftSide < rightSide) {
    // Move the left pointer to the next vowel from the start.
    while (leftSide < rightSide && !isVowel(chars[leftSide])) {
      leftSide++;
    }

    // Move the right pointer to the next vowel from the end.
    while (leftSide < rightSide && !isVowel(chars[rightSide])) {
      rightSide--;
    }

    // Swap the vowels at the left and right pointers.
    [chars[leftSide], chars[rightSide]] = [chars[rightSide], chars[leftSide]];

    // Move both pointers to continue the search.
    leftSide++;
    rightSide--;
  }

  // Join the modified array of characters back into a string and return it.
  return chars.join("");
}

// Example usage:
const inputString = "Hello, World!";
const reversedString = reverseVowels(inputString);
console.log(reversedString);
