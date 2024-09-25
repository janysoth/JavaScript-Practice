/**
 * You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.
 */

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const nearestExit = function (maze, entrance) {
  const rows = maze.length;
  const cols = maze[0].length;
  const directions = [
    [1, 0],   // Down
    [-1, 0],  // Up
    [0, 1],   // Right
    [0, -1]   // Left
  ];

  const queue = [[entrance[0], entrance[1], 0]]; // [row, col, steps]
  maze[entrance[0]][entrance[1]] = '+'; // Mark the entrance as visited

  while (queue.length > 0) {
    const [curRow, curCol, steps] = queue.shift();

    // Check all 4 possible directions
    for (const [dRow, dCol] of directions) {
      const newRow = curRow + dRow;
      const newCol = curCol + dCol;

      // Check if it's within bounds and not a wall
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && maze[newRow][newCol] === '.') {
        // Check if it's an exit
        if (newRow === 0 || newRow === rows - 1 || newCol === 0 || newCol === cols - 1) {
          return steps + 1;
        }

        // Mark as visited and add to queue
        maze[newRow][newCol] = '+';
        queue.push([newRow, newCol, steps + 1]);
      }
    }
  }

  return -1; // No exit found
};