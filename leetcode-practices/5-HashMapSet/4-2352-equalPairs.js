/**
 * Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    let temp = [];

    for (let j = 0; j < grid.length; j++) {
      temp.push(grid[j][i]);
    }

    for (let k = 0; k < grid.length; k++) {
      if (grid[k].every((element, index) => element === temp[index])) {
        count++;
      }
    }
  }

  return count;
}

// Example usage:
const grid = [[3, 2, 1], [1, 7, 6], [2, 7, 7]];

const result = equalPairs(grid);
console.log(result);
