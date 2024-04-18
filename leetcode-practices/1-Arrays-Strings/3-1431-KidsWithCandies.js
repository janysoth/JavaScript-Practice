/**
 * There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.
 */

const kidsWithCandies = function (candies, extraCandies) {
  // Step 1: Find the maximum number of candies among all kids.
  const maxCandies = Math.max(...candies);

  // Step 2: Iterate through the array of candies.
  const result = candies.map((kidCandies) => {
    // Check if adding extraCandies to the current kid's candies
    // would make them have the greatest number of candies.
    return (kidCandies + extraCandies) >= maxCandies;
  });

  // Step 3: Return the boolean array as the final result.
  return result;
};

// Example usage:
const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
const result = kidsWithCandies(candies, extraCandies);
console.log(result);