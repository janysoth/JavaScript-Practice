/**
 * You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let freshOranges = 0;
  let queue = [];

  // Initialize the queue with all rotten oranges' positions and count fresh oranges
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c, 0]); // [row, col, minute]
      } else if (grid[r][c] === 1) {
        freshOranges++;
      }
    }
  }

  // Directions for moving up, down, left, right
  const directions = [
    [1, 0], [-1, 0], [0, 1], [0, -1]
  ];

  let minutesElapsed = 0;

  // Process the queue using BFS
  while (queue.length > 0) {
    const [x, y, minutes] = queue.shift();
    minutesElapsed = minutes;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // Check if the adjacent cell is a fresh orange
      if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && grid[nx][ny] === 1) {
        grid[nx][ny] = 2; // Rotten the fresh orange
        freshOranges--; // Decrease the count of fresh oranges
        queue.push([nx, ny, minutes + 1]);
      }
    }
  }

  // If there are still fresh oranges, return -1; otherwise, return the time elapsed
  return freshOranges === 0 ? minutesElapsed : -1;
};