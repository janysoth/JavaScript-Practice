/**
 * 2390 Remove Stars From a String
 * You are give a string s, which contains stars *. 
 * In one operation you can:
 * Chose a star in s.
 * Remove the closest non-star character to its left, as well as remove the star itself.
 * Return the string after all stars have been removed.
 */

function removeStars(s) {
  const stack = [];

  for (let char of s) {
    if (char === '*') {
      while (stack.length && stack[stack.length - 1] === null) {
        stack.pop(); // Remove adjacent stars
      }
      if (stack.length) {
        stack.pop(); // Remove closest non-star character to the left
        stack.push(null); // Mark the current position as a removed star
      }
    } else {
      stack.push(char); // Push non-star characters onto the stack
    }
  }

  // Filter out the removed stars and join the remaining characters
  return stack.filter(char => char !== null).join('');
}

// Test the function
const s = "leet**cod*e";
console.log(removeStars(s)); 
