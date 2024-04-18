/**
 * Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function (chars) {
  let writeIndex = 0;  // Index to write the compressed characters
  let readIndex = 0;  // Index to read characters from the original array

  while (readIndex < chars.length) {
    let char = chars[readIndex];
    let count = 0;

    // Count consecutive repeating characters
    while (readIndex < chars.length && chars[readIndex] === char) {
      readIndex++;
      count++;
    }

    // Write compressed character(s) to the array
    chars[writeIndex++] = char;

    if (count > 1) {
      // Convert count to string and write each digit to the array
      let countStr = count.toString();
      for (let digit of countStr) {
        chars[writeIndex++] = digit;
      }

    }
  }

  // Replace the chars length with the writeIndex
  // And return the new compressed array of chars
  chars.length = writeIndex;
  return chars;
};

let inputArray = ["a", "a", "b", "b", "c", "c", "c"];
compress(inputArray);
console.log(inputArray.join(''));
