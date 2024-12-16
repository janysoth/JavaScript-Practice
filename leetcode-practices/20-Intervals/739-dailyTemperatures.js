/**
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack = []; // Stack to store indices of temperatures

  for (let i = 0; i < n; i++) {
    // Check if the current temperature is greater than the temperature
    // at the index stored at the top of the stack
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevIndex = stack.pop(); // Get the index of the cooler temperature
      result[prevIndex] = i - prevIndex; // Calculate the number of days waited
    }
    stack.push(i); // Push the current index onto the stack
  }

  return result;
};