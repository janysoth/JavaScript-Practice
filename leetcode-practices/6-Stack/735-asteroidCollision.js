/**
 * 735 Asteroid Collision
 * We are given an array asteroids of integers representing asterioids in a row.
      For each  asteroid, the absolute value represents its size, and the sign represents
      its direction (positive meaning right, negative meaning left). 
      Each asteroid moves at the same speed. 
 
 *  Find out the  state of  the asteroids after all collisions.  If 2 asteroids meet, 
      the smaller one will explode. IF both are the same size, both will explode.
      Two asteroids moving in the same direction will never meet. 
**/

const asteroidCollision = (asteroids) => {
  // Initialize an empty stack to keep track of remaining asteroids after collisions
  const stack = [];

  // Iterate through each asteroid in the input array
  for (const asteroid of asteroids) {
    // If the asteroid is positive (moving right), push it onto the stack
    if (asteroid > 0) {
      stack.push(asteroid);
    } else {
      // If the asteroid is negative (moving left), handle collision with asteroids on the stack
      // Keep popping asteroids from the stack while there are asteroids moving right and there's a collision
      while (stack.length && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(asteroid)) {
        stack.pop();
      }
      // If there's no asteroid moving right left on the stack or the current asteroid is larger,
      // push the current asteroid onto the stack
      if (!stack.length || stack[stack.length - 1] < 0) {
        stack.push(asteroid);
      }
      // If the current asteroid is the same size as the top asteroid on the stack,
      // both asteroids explode and are removed from the stack
      else if (stack[stack.length - 1] === Math.abs(asteroid)) {
        stack.pop();
      }
    }
  }

  // Return the remaining asteroids after all collisions
  return stack;
}

// Example usage:
const asteroids = [5, 10, -5];
console.log(asteroidCollision(asteroids)); // Output: [5, 10]