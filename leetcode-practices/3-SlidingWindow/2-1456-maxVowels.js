/**
 * Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// const maxVowels = function (s, k) {
//   let currentVowelCount = 0, leftPointer = 0, maxVowelCount = 0;

//   for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
//     // Check if the current character is a vowel and update the current count
//     switch (s[rightPointer]) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//         currentVowelCount++;
//     }

//     // Check if the current substring has reached length k
//     if (rightPointer - leftPointer + 1 === k) {
//       // Update the maximum vowel count
//       maxVowelCount = Math.max(currentVowelCount, maxVowelCount);

//       // If the maximum vowel count reaches k, return k
//       if (maxVowelCount === k) return k;

//       // Adjust the current count by subtracting the leftmost character
//       switch (s[leftPointer]) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//           currentVowelCount--;
//       }

//       // Move the left pointer to the right to slide the window
//       leftPointer++;
//     }
//   }

//   // Return the maximum vowel count among all substrings of length k
//   return maxVowelCount;
// };

const maxVowels = function (s, k) {
  // Define a set of vowel letters
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  // Initialize variables to track the maximum vowel count and the current vowel count
  let maxVowelsCount = 0;
  let currentVowelsCount = 0;

  // Count vowels for the first substring of length k
  for (let i = 0; i < k; i++) {
    // Check if the current character is a vowel
    if (vowels.has(s[i])) {
      currentVowelsCount++;
    }
  }

  // Update the maximum count based on the first substring
  maxVowelsCount = currentVowelsCount;

  // Iterate through the rest of the substrings
  for (let i = k; i < s.length; i++) {
    // Remove the leftmost character from the current substring
    if (vowels.has(s[i - k])) {
      currentVowelsCount--;
    }

    // Add the current character to the substring
    if (vowels.has(s[i])) {
      currentVowelsCount++;
    }

    // Update the maximum count if the current substring has more vowels
    maxVowelsCount = Math.max(maxVowelsCount, currentVowelsCount);

    // If the maximum possible vowel count is reached, exit the loop
    if (maxVowelsCount === k) {
      break;
    }
  }

  // Return the maximum vowel count among all substrings of length k
  return maxVowelsCount;
}

const s = "abciiidef";
const k = 3;
const result = maxVowels(s, k);
console.log(result);